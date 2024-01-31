import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlato } from 'src/app/data/IPlatos';

@Component({
  selector: 'app-ficha-plato',
  templateUrl: './ficha-plato.component.html',
  styleUrls: ['./ficha-plato.component.scss']
})
export class FichaPlatoComponent {
  @Input() plato:IPlato;
  @Output() platoParaReceta = new EventEmitter<IPlato>();
  @Output() platoEliminado = new EventEmitter<IPlato>();

  emitirPlatoSeleccionado() {
    this.platoParaReceta.emit(this.plato);
  }

  eliminarPlato() {
    this.platoEliminado.emit(this.plato);
  }
}
