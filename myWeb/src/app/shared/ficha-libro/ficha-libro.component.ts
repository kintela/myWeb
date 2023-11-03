import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-libro',
  templateUrl: './ficha-libro.component.html',
  styleUrls: ['./ficha-libro.component.scss']
})
export class FichaLibroComponent {
  @Input() caratula: string;
  @Input() enlace: string;
  @Input() titulo: string;
  @Input() ISBN: string;
  @Input() autor: string;
  @Input() depositoLegal: string;
  @Input() sinopsis: string;
  @Input() editorial: string;
}
