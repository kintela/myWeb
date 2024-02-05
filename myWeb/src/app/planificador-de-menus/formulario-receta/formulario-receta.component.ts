import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.scss']
})
export class FormularioRecetaComponent implements OnInit{  
  categorias: any[]; 
  platos: any[];
  imageSrc: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<FormularioRecetaComponent>) {}

  ngOnInit(): void {
    this.categorias = this.data.categorias;
    this.platos = this.data.platos;
    console.log(this.categorias);
    console.log(this.platos);
  }

  onImageSelected($event) {
    console.log($event);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
