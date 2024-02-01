import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlato } from 'src/app/data/IPlatos';

export interface PlatoEliminadoEvent {
  plato: IPlato;
  dia: string;
  tipo: string;
}

@Component({
  selector: 'app-ficha-plato',
  templateUrl: './ficha-plato.component.html',
  styleUrls: ['./ficha-plato.component.scss']
})
export class FichaPlatoComponent {
  @Input() plato:IPlato;
  @Input() dia: string;
  @Input() tipo: string; 
  @Output() platoParaReceta = new EventEmitter<IPlato>();
  @Output() platoEliminado = new EventEmitter<PlatoEliminadoEvent>();

  emitirPlatoSeleccionado() {
    this.platoParaReceta.emit(this.plato);
  }

  eliminarPlato() {
    this.platoEliminado.emit({ plato: this.plato, dia: this.dia, tipo: this.tipo });
  }
  
}
