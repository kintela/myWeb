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

  onSelectTrackOLD(track: any): void {
    this.pistaSeleccionada = track.name;
    this.artistaSeleccionado = track.artists[0].name;
    this.albumSeleccionado = track.album.name;
  
    // Llamada a MusixMatch para obtener el ID de la pista
    this.musixMatchService.getMusixMatchTrackId(track.artists[0].name, track.name).pipe(
      switchMap(response => {
        const trackId = response.message.body.track_list[0].track.track_id;
        console.log('Track ID:', trackId);
  
        // Obtiene las letras de la canción
        return this.musixMatchService.getMusixMatchTrackLyrics(trackId);
      }),
      switchMap(lyricsResponse => {
        this.letrasCancion = lyricsResponse.message.body.lyrics.lyrics_body;
  
        // Formar el término de búsqueda para YouTube
        const searchTerm = `${this.artistaSeleccionado} ${this.albumSeleccionado} ${this.pistaSeleccionada}`;
  
        // Llamada a la API de YouTube para obtener el video
        return this.youtubeService.getVideos(searchTerm);
      })
    ).subscribe(
      videoResponse => {
        console.log('Video:', videoResponse);
        if (videoResponse.items && videoResponse.items.length > 0) {
          this.setVideo('https://www.youtube.com/embed/' + videoResponse.items[0].id.videoId);
        } else {
          console.log('No se encontraron videos para esta pista.');
        }
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  onSelectTrack(track: any): void {
    this.pistaSeleccionada = track.name;
    this.artistaSeleccionado = track.artists[0].name;
    this.albumSeleccionado = track.album.name;
  
    // Llamada a MusixMatch para obtener el ID de la pista
    this.musixMatchService.getMusixMatchTrackId(track.artists[0].name, track.name).pipe(
      switchMap(response => {
        // Verifica si hay track_list y si tiene elementos
        if (response.message.body.track_list && response.message.body.track_list.length > 0) {
          const trackId = response.message.body.track_list[0].track.track_id;
          console.log('Track ID:', trackId);
  
          // Obtiene las letras de la canción
          return this.musixMatchService.getMusixMatchTrackLyrics(trackId);
        } else {
          // Si no hay pistas, emite un error o un valor que indique la ausencia de letras
          throw new Error('Track not found in MusixMatch');
        }
      }),
      switchMap(lyricsResponse => {
        // Verifica si el cuerpo de la letra está disponible
        if (lyricsResponse.message.body.lyrics) {
          this.letrasCancion = lyricsResponse.message.body.lyrics.lyrics_body;
        } else {
          // Si no hay letras, establece un mensaje predeterminado
          this.letrasCancion = 'Letras no disponibles.';
        }
  
        // Formar el término de búsqueda para YouTube
        const searchTerm = `${this.artistaSeleccionado} ${this.albumSeleccionado} ${this.pistaSeleccionada}`;
  
        // Llamada a la API de YouTube para obtener el video
        return this.youtubeService.getVideos(searchTerm);
      })
    ).subscribe(
      videoResponse => {
        console.log('Video:', videoResponse);
        if (videoResponse.items && videoResponse.items.length > 0) {
          this.setVideo('https://www.youtube.com/embed/' + videoResponse.items[0].id.videoId);
        } else {
          console.log('No se encontraron videos para esta pista.');
        }
      },
      error => {
        console.error('Error al obtener datos:', error);
        this.letrasCancion = 'Letras no disponibles.';
        // Puedes también establecer aquí un video predeterminado o una imagen estática.
      }
    );
  }
  
  

  private setVideo(url: string): void {
    const autoplayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    this.videoUrl = autoplayUrl;
  }

}
