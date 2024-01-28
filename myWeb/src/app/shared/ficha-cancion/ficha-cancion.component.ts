import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { canciones } from 'src/app/data/canciones';
import { PartituraComponent } from 'src/app/music/canciones/partitura/partitura.component';

@Component({
  selector: 'app-ficha-cancion',
  templateUrl: './ficha-cancion.component.html',
  styleUrls: ['./ficha-cancion.component.scss']
})
export class FichaCancionComponent {  
  @Input() imagen: string;
  @Input() enlace: string;
  @Input() texto: string;
  @Input() spotify: string;
  @Input() indiceCancion: number;
  @Input() id: number;

  canciones=canciones;

  constructor(private dialog: MatDialog) {}

  mostrarPartitura(index: number) {
    this.dialog.open(PartituraComponent, {
      data: {
        cancion: this.canciones[index]
      }
    });
  }

  
}

