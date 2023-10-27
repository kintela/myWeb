import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Partitura1Component } from '../canciones/cancion1/partitura1/partitura1.component';
import { Partitura2Component } from '../canciones/cancion2/partitura2/partitura2.component';
import { Partitura3Component } from '../canciones/cancion3/partitura3/partitura3.component';
import { Partitura4Component } from '../canciones/cancion4/partitura4/partitura4.component';
import { Partitura5Component } from '../canciones/cancion5/partitura5/partitura5.component';
import { Partitura6Component } from '../canciones/cancion6/partitura6/partitura6.component';
import { Partitura7Component } from '../canciones/cancion7/partitura7/partitura7.component';
import { Partitura8Component } from '../canciones/cancion8/partitura8/partitura8.component';
import { Partitura9Component } from '../canciones/cancion9/partitura9/partitura9.component';
import { Partitura10Component } from '../canciones/cancion10/partitura10/partitura10.component';
import { Partitura11Component } from '../canciones/cancion11/partitura11/partitura11.component';
import { Partitura12Component } from '../canciones/cancion12/partitura12/partitura12.component';
import { Partitura13Component } from '../canciones/cancion13/partitura13/partitura13.component';
import { Partitura14Component } from '../canciones/cancion14/partitura14/partitura14.component';
import { Partitura15Component } from '../canciones/cancion15/partitura15/partitura15.component';
import { Partitura16Component } from '../canciones/cancion16/partitura16/partitura16.component';
import { Partitura17Component } from '../canciones/cancion17/partitura17/partitura17.component';
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
    //this.router.navigate(['cancion' + (indice + 1)]);
    this.router.navigate(['cancion' + (indice + 1)], { queryParams: 
      { 
        titulo: this.canciones[indice].titulo, 
        grupo: this.canciones[indice].grupo, 
        album:this.canciones[indice].album,
        anio:this.canciones[indice].anio,
      } 
    });
  }

  mostrarPartitura(index: number) {
    let component;
    switch(index+1) {
      case 1: component = Partitura1Component; break;      
      case 2: component = Partitura2Component; break;  
      case 3: component = Partitura3Component; break;
      case 4: component = Partitura4Component; break;
      case 5: component = Partitura5Component; break;  
      case 6: component = Partitura6Component; break;  
      case 7: component = Partitura7Component; break;  
      case 8: component = Partitura8Component; break;  
      case 9: component = Partitura9Component; break;  
      case 10: component = Partitura10Component; break;  
      case 11: component = Partitura11Component; break;  
      case 12: component = Partitura12Component; break;  
      case 13: component = Partitura13Component; break;  
      case 14: component = Partitura14Component; break;  
      case 15: component = Partitura15Component; break;  
      case 16: component = Partitura16Component; break;  
      case 17: component = Partitura17Component; break;   
    }
  
    this.dialog.open(component, {
      data: {
        cancion: this.canciones[index]
      }
    });
  }
  
  

}
