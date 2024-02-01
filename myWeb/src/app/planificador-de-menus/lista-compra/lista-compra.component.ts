import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IListaCompra } from 'src/app/data/IListaCompra';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.scss']
})
export class ListaCompraComponent {
  @Input() listaCompra: IListaCompra[];

  displayedColumns: string[] = ['ingrediente', 'cantidad', 'seleccionado']; 

  eliminarItem(index: number): void {
    this.listaCompra.splice(index, 1);
  }
  
}
