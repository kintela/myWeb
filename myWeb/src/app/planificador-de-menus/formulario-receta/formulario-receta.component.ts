import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.scss']
})
export class FormularioRecetaComponent implements OnInit{  
  categorias: any[]; 
  platos: any[];
  imageSrc: string;
  recetaForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormularioRecetaComponent>,
    private fb: FormBuilder,
    private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.categorias = this.data.categorias;
    this.platos = this.data.platos;
    console.log('Categorias', this.categorias);
    
    this.recetaForm = this.fb.group({
      nombre: ['', Validators.required],
      categoriaId: ['', Validators.required],
      ingredientes: [''],
      preparacion: [''],
      presentacion: [''],
      enlaceVideo: [''],
      imagen: [''],
      comensales: [null]
    });
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

  
  guardarReceta(){
    if (this.recetaForm.valid) {
      const recetaDTO = this.recetaForm.value;

       // Convertir los campos de texto en arrays de strings
       recetaDTO.ingredientes = recetaDTO.ingredientes ? String(recetaDTO.ingredientes).split('\n').filter(line => line.trim() !== '') : [];
       recetaDTO.preparacion = recetaDTO.preparacion ? String(recetaDTO.preparacion).split('\n').filter(line => line.trim() !== '') : [];
       recetaDTO.presentacion = recetaDTO.presentacion ? String(recetaDTO.presentacion).split('\n').filter(line => line.trim() !== '') : [];
       
      this.recetasService.createReceta(recetaDTO).subscribe(
        response => {
          console.log('Receta guardada', response);
          this.dialogRef.close(response);
        },
        error => {
          console.error('Error al guardar la receta', error);
        }
      );
    }
  }
}
