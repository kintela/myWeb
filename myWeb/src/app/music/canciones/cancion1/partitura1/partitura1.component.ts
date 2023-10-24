import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-partitura1',
  templateUrl: './partitura1.component.html',
  styleUrls: ['./partitura1.component.scss']
})
export class Partitura1Component implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<Partitura1Component>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
