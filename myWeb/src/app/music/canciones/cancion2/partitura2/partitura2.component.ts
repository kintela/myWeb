import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Partitura1Component } from '../../cancion1/partitura1/partitura1.component';

@Component({
  selector: 'app-partitura2',
  templateUrl: './partitura2.component.html',
  styleUrls: ['./partitura2.component.scss']
})

export class Partitura2Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<Partitura2Component>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
