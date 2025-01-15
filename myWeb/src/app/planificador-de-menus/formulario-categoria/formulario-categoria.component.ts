import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.scss']
})
export class FormularioCategoriaComponent implements OnInit {
  categoriaForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<FormularioCategoriaComponent>,
  private fb:FormBuilder,
  private categoriaService: CategoriaService,
  private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      nombre: ['',Validators.required]
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  guardarCategoria() {
    if (this.categoriaForm.valid) {
      const categoriaDTO = this.categoriaForm.value;

      this.categoriaService.createCategoria(categoriaDTO).subscribe(
        response => {
          //console.log('Receta guardada', response);
          this.snackBar.open('Categoría guardada con éxito', 'Cerrar', {
            duration: 3000
          });
          this.dialogRef.close(response);
        },
        error => {
          //console.error('Error al guardar la receta', error);
          this.snackBar.open('Error al guardar la categoría', 'Cerrar', {
            duration: 3000
          });
        }
      );
    }
  }
}
