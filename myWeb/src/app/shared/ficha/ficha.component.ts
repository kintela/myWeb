import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent {
  @Input() imagen: string;
  @Input() enlace: string;
  @Input() texto: string;
}
