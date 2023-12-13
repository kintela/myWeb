import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';

@Component({
  selector: 'app-mhc',
  templateUrl: './mhc.component.html',
  styleUrls: ['./mhc.component.scss']
})
export class MhcComponent {
  
  constructor(private dialog: MatDialog) { }

  abrirConciertos() {
    const url = document.location.origin + '/music/conciertos?grupo=Mi%20Hermana%20Corina';
    window.open(url, '_blank');
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
