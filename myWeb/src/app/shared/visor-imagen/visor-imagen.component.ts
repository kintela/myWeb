import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-visor-imagen',
  templateUrl: './visor-imagen.component.html',
  styleUrls: ['./visor-imagen.component.scss']
})
export class VisorImagenComponent implements OnInit{
  imagePath: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VisorImagenComponent>) {}

  ngOnInit(): void {
    this.imagePath = 'assets/memorabilia/' + this.data.image;
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
