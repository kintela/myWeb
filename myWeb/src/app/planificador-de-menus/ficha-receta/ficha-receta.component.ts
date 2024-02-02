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
  
  agregarAListaCompraOLD(ingrediente: string) {
    const item:IListaCompra = {
      ingrediente: ingrediente,
      cantidad: 1
    };
    this.listaCompra.emit(item);

  } 

  agregarAListaCompra(ingrediente: string) {
    // Separar la cantidad del nombre del ingrediente usando una expresión regular
    // que busca uno o más dígitos al principio de la cadena seguidos de un espacio.
    const match = ingrediente.match(/^(\d+)\s(.*)$/);
    
    if (match && match.length === 3) {
      // match[1] será la cantidad y match[2] el nombre del ingrediente sin el número.
      const cantidad = parseInt(match[1], 10);
      const nombreIngrediente = match[2];

      const item: IListaCompra = {
        ingrediente: nombreIngrediente,
        cantidad: cantidad,
      };
      this.listaCompra.emit(item);
    } else {
      // Si no se encuentra una coincidencia, enviar el ingrediente como está.
      const item: IListaCompra = {
        ingrediente: ingrediente,
        cantidad: 1,
      };
      this.listaCompra.emit(item);
    }
  }
  

}
