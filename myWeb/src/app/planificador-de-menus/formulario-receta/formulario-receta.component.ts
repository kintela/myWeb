import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaDTO } from 'src/app/data/DTOs/categoriaDTO';
import { ComunService } from 'src/app/services/comun.service';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.scss']
})
export class FormularioRecetaComponent implements OnInit{  
  //categorias: any[]; 
  categorias: CategoriaDTO[]; 
  imageSrc: string;
  recetaForm: FormGroup;
  isEditMode: boolean;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormularioRecetaComponent>,
    private fb: FormBuilder,
    private recetasService: RecetasService,
    private comunService: ComunService,
    private snackBar: MatSnackBar) {
      this.isEditMode = data.isEditMode;
    }

  ngOnInit(): void {
    console.log('Data', this.data);

    const allCategorias=this.comunService.getCategorias();

    this.categorias = allCategorias.filter(categoria => 
      this.data.receta.categoriaIds.includes(categoria.categoriaId)
    );


    this.recetaForm = this.fb.group({
      nombre: [this.data.receta ? this.data.receta.nombre : '', Validators.required],
      categoriaIds: [this.data.receta ? this.data.receta.categoriaIds : [], Validators.required],
      ingredientes: [this.data.receta ? this.data.receta.ingredientes?.join('\n') : '', Validators.required],
      preparacion: [this.data.receta ? this.data.receta.preparacion?.join('\n') : '', Validators.required],
      presentacion: [this.data.receta ? this.data.receta.presentacion?.join('\n') : ''],
      enlaceVideo: [this.data.receta ? this.data.receta.enlaceVideo : ''],
      imagen: [this.data.receta ? this.data.receta.imagen : ''],
      comensales: [this.data.receta ? this.data.receta.comensales : null],      
    });

    if (this.data.receta && this.data.receta.imagen) {
      this.imageSrc = this.data.receta.imagen;
    }   
  }

  onImageSelected($event:any): void {
    /*const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.recetaForm.patchValue({ imagen: this.imageSrc });
      };
      reader.readAsDataURL(file);
    }*/
    console.log($event);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();    
  } 


  guardarReceta(): void {
    if (this.recetaForm.valid) {
      const recetaDTO = this.recetaForm.value;

      // Convertir los campos de texto en arrays de strings solo si tienen valor
      recetaDTO.ingredientes = recetaDTO.ingredientes ? recetaDTO.ingredientes?.split('\n').filter(line => line.trim() !== '') : [];
      recetaDTO.preparacion = recetaDTO.preparacion ? recetaDTO.preparacion?.split('\n').filter(line => line.trim() !== '') : [];
      recetaDTO.presentacion = recetaDTO.presentacion ? recetaDTO.presentacion?.split('\n').filter(line => line.trim() !== '') : [];

      if (this.isEditMode) {
        // Lógica para actualizar la receta existente
        this.recetasService.updateReceta(this.data.receta.recetaId, recetaDTO).subscribe(
          response => {
            //console.log('Receta actualizada', response);
            this.snackBar.open('Receta actualizada con éxito', 'Cerrar', {
              duration: 3000
            });
            this.dialogRef.close(response);
          },
          error => {
            //console.error('Error al actualizar la receta', error);
            this.snackBar.open('Error al actualizar la receta', 'Cerrar', {
              duration: 3000
            });
          }
        );
      } else {
        // Lógica para crear una nueva receta
        this.recetasService.createReceta(recetaDTO).subscribe(
          response => {
            //console.log('Receta guardada', response);
            this.snackBar.open('Receta guardada con éxito', 'Cerrar', {
              duration: 3000
            });
            this.dialogRef.close(response);
          },
          error => {
            //console.error('Error al guardar la receta', error);
            this.snackBar.open('Error al guardar la receta', 'Cerrar', {
              duration: 3000
            });
          }
        );
      }
    }
  }
}
