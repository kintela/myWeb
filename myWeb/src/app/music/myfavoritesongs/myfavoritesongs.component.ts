import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ICancion } from 'src/app/data/ICancion';
import { canciones } from 'src/app/data/canciones';


@Component({
  selector: 'app-myfavoritesongs',
  templateUrl: './myfavoritesongs.component.html',
  styleUrls: ['./myfavoritesongs.component.scss']
})

export class MyfavoritesongsComponent { 
  canciones=canciones;

  constructor(private router: Router, private dialog: MatDialog) { }

  navegarACancion(indice: number) {
    this.router.navigate(['cancion' + (indice + 1)], { queryParams: 
      { 
        titulo: this.canciones[indice].titulo, 
        grupo: this.canciones[indice].grupo, 
        album:this.canciones[indice].album,
        anio:this.canciones[indice].anio,
      } 
    });
  }


}
