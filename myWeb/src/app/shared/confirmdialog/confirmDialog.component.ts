import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
