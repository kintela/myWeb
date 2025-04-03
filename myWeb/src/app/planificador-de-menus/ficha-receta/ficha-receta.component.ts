import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecetaDTO } from 'src/app/data/DTOs/recetaDTO';
import { IListaCompra } from 'src/app/data/IListaCompra';
import { IPlato } from 'src/app/data/IPlatos';
import { FormularioRecetaComponent } from '../formulario-receta/formulario-receta.component';
import { MatDialog } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-ficha-receta',
  templateUrl: './ficha-receta.component.html',
  styleUrls: ['./ficha-receta.component.scss']
})
export class FichaRecetaComponent {
  @Input() plato: RecetaDTO;
  @Output() listaCompra=new EventEmitter<IListaCompra>();

  constructor(private dialog: MatDialog) {}
  

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

  editarReceta(plato: RecetaDTO): void {
    const dialogRef = this.dialog.open(FormularioRecetaComponent, {
      width: '50%',
      data: { receta: plato, isEditMode: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar los datos del formulario una vez que el diálogo se cierra, si es necesario
      }
    });
  }
  

}
