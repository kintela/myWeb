import { Component } from '@angular/core';
import { VisorImagenComponent } from '../shared/visor-imagen/visor-imagen.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lamentxu',
  templateUrl: './lamentxu.component.html',
  styleUrls: ['./lamentxu.component.scss']
})
export class LamentxuComponent {
  constructor(private dialog: MatDialog) { }

  openImageViewer(image: string) {
    this.dialog.open(VisorImagenComponent, {
      data: { image: image },
      panelClass: 'custom-dialog-container' // Clase para estilos personalizados
    });
  }  

}
