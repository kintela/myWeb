import { Component, Input } from '@angular/core';
import { IPlato } from 'src/app/data/IPlatos';

@Component({
  selector: 'app-ficha-receta',
  templateUrl: './ficha-receta.component.html',
  styleUrls: ['./ficha-receta.component.scss']
})
export class FichaRecetaComponent {
  @Input() plato:IPlato;
}
