import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';

@Component({
  selector: 'app-cancion5',
  templateUrl: './cancion5.component.html',
  styleUrls: ['./cancion5.component.scss']
})
export class Cancion5Component implements OnInit {
  nombreCancion: string;
  grupo:string;
  album:string;
  anio:number;
  currentVideoUrl: SafeResourceUrl;

 constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['titulo'];
      this.grupo = params['grupo'];
      this.album = params['album'];
      this.anio = params['anio'];
    });
  }


  
  mostrarVideo(videoUrl: string) {
    this.dialog.open(ReproductorVideoComponent, {
      data: {
        url: videoUrl
      }
    });
  }

  openImageViewer(image: string) {
    this.dialog.open(VisorImagenComponent, {
      data: { image: image },
      panelClass: 'custom-dialog-container' // Clase para estilos personalizados
    });
  }  

}
