import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myfavoritesongs',
  templateUrl: './myfavoritesongs.component.html',
  styleUrls: ['./myfavoritesongs.component.scss']
})

export class MyfavoritesongsComponent {
  canciones = [
    'The Beatles-Something',
    'The Beatles-Here comes the sun (Capo en V)',
    'The Beatles-Norwegian wood (This bird has flown) (Capo en II)',
    'The Beatles-You\'ve got to hide your love away',
    'The Beatles-Blackbird',
    'Los Secretos-Pero a tu lado',
    'Antonio vega-El sitio de mi recreo (Capo en III)',
    'Mikel Laboa-Txoria txori (Capo en III)',
    'Gari-Amapola (Capo en III)',
    'Eduardo Aute-Al Alba (Capo en III)',
    'Pink Floyd-Wish you were here',
    'Eric Clapton-Tears in heaven',
    'The Police-Every Breath you take',
    'The Verve-Bitter sweet symphony',
    'Creedence-Fortunate Son',
    'Miguel Rios- Santa Lucia (Capo en I)',
    'Miguel Rios- El blues del autobus'
  ];

  constructor(private router: Router) { }

  navegarACancion(indice: number) {
    this.router.navigate(['cancion' + (indice + 1)]);
  }
  

}
