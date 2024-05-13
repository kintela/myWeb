import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';

@Component({
  selector: 'app-cancion7',
  templateUrl: './cancion7.component.html',
  styleUrls: ['./cancion7.component.scss']
})
export class Cancion7Component implements OnInit{
  nombreCancion: string;
  grupo:string;
  album:string;
  anio:number;
  
  constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

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

}
