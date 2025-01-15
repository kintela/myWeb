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
        err => {
          let errorMessage = 'Error guardando la categoría asegurate de que no exista una ya con el mismo nombre';
          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 3000,
          });
        }
      );
    }
  }
}
