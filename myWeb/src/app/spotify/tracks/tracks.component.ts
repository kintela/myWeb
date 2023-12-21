import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MusixmatchService } from 'src/app/services/musixmatch.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit{
  tracks: any[] = [];
  displayedColumns: string[] = ['caratula','pista', 'album', 'artista']; 
  dataSource: MatTableDataSource<any>;
  letrasCancion: string = '';
  pistaSeleccionada!:string;
  artistaSeleccionado!:string;
  albumSeleccionado!:string;
  playlistId!:string;
  playlistName!:string;
  videoUrl: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService, private musixMatchService: MusixmatchService,
    private youtubeService:YoutubeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getVideo('Mi Hermana Corina');
    const accessToken = localStorage.getItem('spotifyAccessToken');
    this.route.queryParams.subscribe(params => {
      this.playlistId = params['playlistId'];
      this.playlistName = params['playlistName'];
      if (this.playlistId) {
        this.spotifyService.fetchTracks(accessToken, this.playlistId).subscribe(tracks => {
          console.log('Tracks:', tracks.items);
          this.tracks = tracks.items;
          this.dataSource = new MatTableDataSource(tracks.items);
          
        }, error => {
          console.error('Error fetching tracks:', error);
        });
      }
    });
  }

  getVideo(pista:string):void{
    this.youtubeService.getVideos(pista).subscribe(
      data=>{
        console.log('Video:',data);
        this.setVideo('https://www.youtube.com/embed/'+data.items[0].id.videoId);
      },
      error=>console.error('Error al obtener el video:',error),
      ()=>{}
    );
  }


  onSelectTrack(track: any): void {
    //console.log('Pista seleccionada:', track.name);
    this.pistaSeleccionada = track.name;
    this.artistaSeleccionado = track.artists[0].name;
    this.albumSeleccionado = track.album.name;
    this.musixMatchService.getMusixMatchTrackId(track.artists[0].name, track.name).pipe(
      switchMap(response => {
        const trackId = response.message.body.track_list[0].track.track_id;
        console.log('Track ID:', trackId);
        return this.musixMatchService.getMusixMatchTrackLyrics(trackId);
      })
    ).subscribe(
      lyricsResponse => {
        console.log(lyricsResponse);
        this.letrasCancion = lyricsResponse.message.body.lyrics.lyrics_body;
      },
      error => {
        console.error('Error al obtener la letra de la canción:', error);
      }
    );
  }

  private setVideo(url: string): void {
    const autoplayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    this.videoUrl = autoplayUrl;
  }

}
