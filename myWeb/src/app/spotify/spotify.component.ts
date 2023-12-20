import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { forkJoin, map, switchMap, take, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {
  clientId = "b517fa4fb32742c28cf6c76956591e87";
  code: string | null = null;
  displayName!:string;
  id!:string;
  email!:string;
  spotifyUri!:string;
  spotifyUrl!:string
  profileImg!:string;
  userPlaylists: any[] = [];
  userPlaylistsFiltered: any[] = [];
  searchText = '';

  constructor(private spotifyService:SpotifyService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const storedAccessToken = localStorage.getItem('spotifyAccessToken');
  
    if (storedAccessToken) {
      this.useAccessToken(storedAccessToken);
    } else {
      this.route.queryParams.subscribe(params => {
        this.code = params['code'];
        
        if (this.code) {
          this.spotifyService.getAccessToken(this.clientId, this.code)
            .pipe(
              tap(accessToken => {
                localStorage.setItem('spotifyAccessToken', accessToken);
                this.useAccessToken(accessToken);
              })
            ).subscribe();
        } else {
          this.spotifyService.redirectToAuthCodeFlow(this.clientId)
            .pipe(take(1))
            .subscribe(authUrl => {
              window.location.href = authUrl;
            });
        }
      });
    }
  }
  

  populateUI(profile: any) {
    console.log('populateUI',profile);
    this.displayName = profile.display_name;
    this.id = profile.id;
    this.email = profile.email;
    this.spotifyUri = profile.uri;
    this.spotifyUrl = profile.external_urls.spotify;
    this.profileImg = profile.images[0].url;
  }
  
  aplicarFiltroSearch() {  
    if (this.searchText) {
      const terminoBusqueda = this.searchText.toLowerCase();
      this.userPlaylistsFiltered = this.userPlaylists.filter(m => {
        return Object.keys(m).some(key => m[key] && m[key].toString().toLowerCase().includes(terminoBusqueda));
      });
    } else {
      this.userPlaylistsFiltered = this.userPlaylists;
    }  
  }
  

  private useAccessToken(accessToken: string) {
    forkJoin({
      profile: this.spotifyService.fetchProfile(accessToken),
      playlists: this.spotifyService.fetchAllPlaylists(accessToken, 'https://api.spotify.com/v1/me/playlists?limit=20')
    })
    .pipe(
      tap(data => console.log('Received combined data:', data)),
      map(data => {
        data.playlists.sort((a, b) => a.name.localeCompare(b.name));
        return data;
      })
    )
    .subscribe(
      data => {
        this.populateUI(data.profile);
        this.userPlaylists = data.playlists;
        this.aplicarFiltroSearch();
        console.log("User's playlists:", data.playlists);
      },
      error => {
        console.error(error);
        // Si hay un error (por ejemplo, el token expiró), redirige para obtener un nuevo token
        localStorage.removeItem('spotifyAccessToken');
        this.spotifyService.redirectToAuthCodeFlow(this.clientId)
          .pipe(take(1))
          .subscribe(authUrl => {
            window.location.href = authUrl;
          });
      }
    );
  }

  // En tu componente
onPlaylistImageClickOLD(playlistId: string) {
  const accessToken = localStorage.getItem('spotifyAccessToken');
  if (accessToken) {
    this.spotifyService.fetchTracks(accessToken, playlistId).subscribe(tracks => {
      console.log('Tracks:', tracks.items);
      this.router.navigate(['/spotify/tracks'], { queryParams: { playlistId: playlistId } });
    }, error => {
      console.error('Error fetching tracks:', error);
    });
  } else {
    console.log('Access Token is not available');
  }
}
  onPlaylistImageClick(playlistId: string) {
    const accessToken = localStorage.getItem('spotifyAccessToken');
    if (accessToken) {
      this.router.navigate(['/spotify/tracks'], { queryParams: { playlistId: playlistId } });
    } else {
      console.log('Access Token is not available');
    }
  }


}
