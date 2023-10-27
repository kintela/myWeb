import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-video',
  templateUrl: './fichaVideo.component.html',
  styleUrls: ['./fichaVideo.component.scss']
})
export class FichaVideoComponent {
  @Input() imagen: string;
  @Input() enlace: string;
  @Input() texto: string;
}
