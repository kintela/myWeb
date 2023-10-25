import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion3',
  templateUrl: './cancion3.component.html',
  styleUrls: ['./cancion3.component.scss']
})
export class Cancion3Component implements OnInit {
  nombreCancion: string;
  grupo:string;
  album:string;
  anio:number;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['titulo'];
      this.grupo = params['grupo'];
      this.album = params['album'];
      this.anio = params['anio'];
    });
  }

}
