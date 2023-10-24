import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-partitura6',
  templateUrl: './partitura6.component.html',
  styleUrls: ['./partitura6.component.scss']
})
export class Partitura6Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<Partitura6Component>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
