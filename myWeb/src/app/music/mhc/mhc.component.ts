import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDisco } from 'src/app/data/IDisco';
import { discos } from 'src/app/data/discos';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';

@Component({
  selector: 'app-mhc',
  templateUrl: './mhc.component.html',
  styleUrls: ['./mhc.component.scss']
})
export class MhcComponent implements OnInit{
  discos=discos;

  primerosDiscos:IDisco[]=[];
  restoDiscos:IDisco[]=[];
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.primerosDiscos = this.discos.filter(disco => disco.year < 2010);
    this.restoDiscos = this.discos.filter(disco => disco.year >= 2010);
  }

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

  navegarAFotos(conciertoId:number) {
    const queryParams = `?conciertoId=${conciertoId}`;
    const url = `/music/memorabilia${queryParams}`;
    window.open(url, '_blank');
  }
}
