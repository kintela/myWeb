import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-partitura5',
  templateUrl: './partitura5.component.html',
  styleUrls: ['./partitura5.component.scss']
})
export class Partitura5Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<Partitura5Component>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
