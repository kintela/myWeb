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

  constructor() { 
    //console.log('Origen desde el constructor',this.origen);
  }
  ngOnInit(): void {
    //console.log('Origen desde ngOn Init',this.origen);
  }
}
