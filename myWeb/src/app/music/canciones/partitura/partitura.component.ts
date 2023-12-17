import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-partitura',
  templateUrl: './partitura.component.html',
  styleUrls: ['./partitura.component.scss']
})
export class PartituraComponent implements OnInit {
  rutaPartitura:string = "https://kintela.azureedge.net/assets/assets/partituras/";
  rutaPartituraCompleta: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PartituraComponent>) { }

  ngOnInit(): void {
    console.log(this.data);

    //const tituloNormalizado = this.data.cancion.titulo.replace(/[^a-zA-Z0-9]/g, '_');
    this.rutaPartituraCompleta = `${this.rutaPartitura}${this.data.cancion.titulo}.jpg`;
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }

}
