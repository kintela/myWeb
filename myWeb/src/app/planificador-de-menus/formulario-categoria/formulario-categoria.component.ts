import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.scss']
})
export class FormularioCategoriaComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<FormularioCategoriaComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // Aquí puedes manejar la lógica para agregar la categoría
    console.log('Category submitted!');
    this.onClose(); // Cerrar el diálogo después de enviar el formulario
  }
}
