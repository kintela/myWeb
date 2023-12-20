import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MusixmatchService } from 'src/app/services/musixmatch.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit{
  tracks: any[] = [];
  displayedColumns: string[] = ['caratula','pista', 'album', 'artista']; 
  dataSource: MatTableDataSource<any>;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService, private musixMatchService: MusixmatchService) { }

  ngOnInit(): void {
    const accessToken = localStorage.getItem('spotifyAccessToken');
    this.route.queryParams.subscribe(params => {
      const playlistId = params['playlistId'];
      if (playlistId) {
        this.spotifyService.fetchTracks(accessToken, playlistId).subscribe(tracks => {
          console.log('Tracks:', tracks.items);
          this.tracks = tracks.items;
          this.dataSource = new MatTableDataSource(tracks.items);
          
        }, error => {
          console.error('Error fetching tracks:', error);
        });
      }
    });
  }


  onSelectTrack(track: any): void {
    console.log('Pista seleccionada:', track.name);
    
    this.musixMatchService.getMusixMatchTrackId(track.artists[0].name, track.name).pipe(
      switchMap(response => {
        const trackId = response.message.body.track_list[0].track.track_id;
        console.log('Track ID:', trackId);
        return this.musixMatchService.getMusixMatchTrackLyrics(trackId);
      })
    ).subscribe(
      lyricsResponse => {
        console.log(lyricsResponse);
        // Aquí manejas la respuesta con las letras
      },
      error => {
        console.error('Error al obtener la letra de la canción:', error);
      }
    );
  }

}
