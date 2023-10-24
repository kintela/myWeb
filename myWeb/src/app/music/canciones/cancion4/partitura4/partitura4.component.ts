import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-partitura4',
  templateUrl: './partitura4.component.html',
  styleUrls: ['./partitura4.component.scss']
})
export class Partitura4Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<Partitura4Component>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
