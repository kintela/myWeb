import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';

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
}
