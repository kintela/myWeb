import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MusixmatchService } from 'src/app/services/musixmatch.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var YT;

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

  player: any;
  currentTrackIndex: number = 0;

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

          this.loadYoutubeIframeApi();
          this.onSelectTrack(this.dataSource.data[0].track,0);
          
        }, error => {
          console.error('Error fetching tracks:', error);
        });
      }
    });
  }  

  onSelectTrack(track: any, index:number): void {
    this.currentTrackIndex = index;
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
          //this.setVideo('https://www.youtube.com/embed/' + videoResponse.items[0].id.videoId);
          this.setVideo(videoResponse.items[0].id.videoId);
        } else {
          console.log('No se encontraron videos para esta pista.');
        }
      },
      error => {
        console.error('Error al obtener datos:', error);
        this.letrasCancion = 'Letras no disponibles.';
      }
    );
  }

  onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      console.log('Video ended. Playing next track...');
      this.currentTrackIndex++;

      // Comprueba si hay más pistas en la lista
      if (this.currentTrackIndex <= this.tracks.length) {
        // Carga la siguiente pista
        this.onSelectTrack(this.tracks[this.currentTrackIndex].track, this.currentTrackIndex);
      } else {
        // No hay más pistas en la lista
        console.log('Fin de la lista de reproducción');
        // Aquí puedes manejar lo que sucede al final de la lista
      }
    }
  }

  onTrackSelected(track: any) {
    const trackIndex = this.tracks.findIndex(t => t.track.id === track.id);
    if (trackIndex !== -1) {
      this.onSelectTrack(track, trackIndex);
    }
  }
  

  
  loadYoutubeIframeApi() {
    if (!window['YT']) { // Cargar el script solo si YT no está definido
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
  

  private setVideoOLD(url: string): void {
    const autoplayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    this.videoUrl = autoplayUrl;
  }

  private setVideo(videoId: string): void {
    if (!this.player) {
      // Si el reproductor no está inicializado, configura la función de inicialización y carga la API
      window['onYouTubeIframeAPIReady'] = () => this.createPlayer(videoId);
      if (window['YT']) {
        this.createPlayer(videoId);
      }
    } else {
      // Si el reproductor ya está inicializado, simplemente carga el nuevo video
      this.player.loadVideoById(videoId);
    }
  }
  

  private createPlayer(videoId: string): void {
    // 'YT' es la variable global definida por la YouTube IFrame Player API
    this.player = new YT.Player('player', { // 'player' es el ID de tu elemento IFrame
      videoId: videoId,
      playerVars: {
        'autoplay': 1
      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }


}
