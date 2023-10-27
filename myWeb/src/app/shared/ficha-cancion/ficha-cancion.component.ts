import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-cancion',
  templateUrl: './ficha-cancion.component.html',
  styleUrls: ['./ficha-cancion.component.scss']
})
export class FichaCancionComponent {  
  @Input() imagen: string;
  @Input() enlace: string;
  @Input() texto: string;

  constructor() {
   
  }
}

