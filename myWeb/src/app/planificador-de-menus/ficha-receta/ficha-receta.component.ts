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
  @Output() listaCompraFinal =new EventEmitter<IListaCompra[]>();

  listaCompra: Array<{ ingrediente: string; cantidad: string; seleccionado: boolean }> = [];

  agregarAListaCompra(ingrediente: string) {
    const item = {
      ingrediente: ingrediente,
      cantidad: '1', // Valor predeterminado o puedes proporcionar una forma de especificarlo
      seleccionado: true,
    };
    this.listaCompra.push(item);

    this.listaCompraFinal.emit(this.listaCompra);
  } 
  

}
