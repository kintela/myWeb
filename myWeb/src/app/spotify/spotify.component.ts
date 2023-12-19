import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { forkJoin, switchMap, take, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private spotifyService:SpotifyService, private route: ActivatedRoute) { }


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
  
  

  private useAccessTokenOLD(accessToken: string) {
    forkJoin({
      profile: this.spotifyService.fetchProfile(accessToken),
      playlists: this.spotifyService.fetchUserPlaylists(accessToken)
    })
    .subscribe(
      data => {
        this.populateUI(data.profile);
        this.userPlaylists = data.playlists.items;
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

  private useAccessToken(accessToken: string) {
    forkJoin({
      profile: this.spotifyService.fetchProfile(accessToken),
      playlists: this.spotifyService.fetchAllPlaylists(accessToken, 'https://api.spotify.com/v1/me/playlists?limit=20')
    })
    .pipe(
      tap(data => console.log('Received combined data:', data))
    )
    .subscribe(
      data => {
        this.populateUI(data.profile);
        this.userPlaylists = data.playlists;
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

}
