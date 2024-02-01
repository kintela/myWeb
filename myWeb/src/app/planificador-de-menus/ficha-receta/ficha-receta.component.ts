import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListaCompra } from 'src/app/data/IListaCompra';
import { IPlato } from 'src/app/data/IPlatos';

@Component({
  selector: 'app-ficha-receta',
  templateUrl: './ficha-receta.component.html',
  styleUrls: ['./ficha-receta.component.scss']
})
export class FichaRecetaComponent {
  @Input() plato:IPlato;
  @Output() listaCompra=new EventEmitter<IListaCompra>();
  
  agregarAListaCompra(ingrediente: string) {
    const item:IListaCompra = {
      ingrediente: ingrediente,
      cantidad: 1,
      seleccionado: true,
    };
    this.listaCompra.emit(item);

  } 
  

}
