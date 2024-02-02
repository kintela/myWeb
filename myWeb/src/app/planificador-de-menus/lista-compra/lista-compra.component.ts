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
  
  guardarListaCompra() {
    const dataStr = JSON.stringify(this.listaCompra);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // Formato: 'aaaa-mm-dd'

    const exportFileDefaultName = `lista_compra-${formattedDate}.json`;
  
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
}
