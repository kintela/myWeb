import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-video',
  templateUrl: './fichaVideo.component.html',
  styleUrls: ['./fichaVideo.component.scss']
})
export class FichaVideoComponent implements OnInit {
  @Input() imagen: string;
  @Input() enlace: string;
  @Input() texto: string;
  @Input() origen: string;
  @Input() year: number;
  @Input() info: string;

  get imagenContainerStyle() {
    if (this.origen === 'vinilo') {
      return { height: '150px', width: '150px' }; // Formato cuadrado para vinilos
    } else {
      return { height: '200px', width: '150px' }; // Formato rectangular predeterminado
    }
  }

  constructor() { 
    //console.log('Origen desde el constructor',this.origen);
  }
  ngOnInit(): void {
    //console.log('Origen desde ngOn Init',this.origen);
  }
}
