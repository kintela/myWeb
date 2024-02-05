import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlato } from 'src/app/data/IPlatos';

export interface PlatoEliminadoEvent {
  plato: IPlato;
  dia: string;
  tipo: string;
  orden: 'primerPlato' | 'segundoPlato' | 'postre';
}

@Component({
  selector: 'app-ficha-plato',
  templateUrl: './ficha-plato.component.html',
  styleUrls: ['./ficha-plato.component.scss']
})
export class FichaPlatoComponent implements OnInit {
  @Input() plato:IPlato;
  @Input() dia: string;
  @Input() tipo: string; 
  @Input() orden: 'primerPlato' | 'segundoPlato' | 'postre';
  @Output() platoParaReceta = new EventEmitter<IPlato>();
  @Output() platoEliminado = new EventEmitter<PlatoEliminadoEvent>();

  ngOnInit(): void {
    console.log(this.plato);
  }


  emitirPlatoSeleccionado() {
    this.platoParaReceta.emit(this.plato);
  }

  eliminarPlato() {
    this.platoEliminado.emit({ plato: this.plato, dia: this.dia, tipo: this.tipo, orden: this.orden });
  }  

  
}
