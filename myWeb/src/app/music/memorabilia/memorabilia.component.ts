import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IMemorabilia } from 'src/app/data/IMemorabilia';
import { memorabilias } from 'src/app/data/memorabilias';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';

@Component({
  selector: 'app-memorabilia',
  templateUrl: './memorabilia.component.html',
  styleUrls: ['./memorabilia.component.scss']
})
export class MemorabiliaComponent implements OnInit {
  memorabilias=memorabilias
  searchText = '';
  filteredMemorabilias: IMemorabilia[] = [];

  constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['grupo'] && queryParams['fecha'] && queryParams['lugar']) {
        const grupo = decodeURIComponent(queryParams['grupo']);
        const fecha = this.parseDate(queryParams['fecha']);
        const lugar = decodeURIComponent(queryParams['lugar']);

        console.log(grupo, fecha, lugar);
  
        this.aplicarFiltroRuta(grupo, fecha, lugar);

      } else {
        this.filteredMemorabilias = memorabilias;
      }
    });
  
  }

  aplicarFiltroRutaOLD(grupo: string, fecha: Date, lugar: string) {
    this.filteredMemorabilias = this.memorabilias.filter(memorabilia => {
      console.log("Comparando:", memorabilia.grupo, grupo, memorabilia.lugar, lugar);
      return memorabilia.grupo.toLowerCase() === grupo.toLowerCase() &&
             memorabilia.lugar.toLowerCase() === lugar.toLowerCase() &&
             this.isSameDay(memorabilia.fecha, fecha);
    });
  }

  aplicarFiltroRuta(grupo: string, fecha: Date, lugar: string) {
    this.filteredMemorabilias = this.memorabilias.filter(memorabilia => {
      const grupoCoincide = memorabilia.grupo ? memorabilia.grupo.toLowerCase() === grupo.toLowerCase() : false;
      const lugarCoincide = memorabilia.lugar ? memorabilia.lugar.toLowerCase() === lugar.toLowerCase() : false;
      const fechaCoincide = memorabilia.fecha ? this.isSameDay(memorabilia.fecha, fecha) : false;
  
      return grupoCoincide && lugarCoincide && fechaCoincide;
    });
  }
  
  

  applyFilter() {
    this.filteredMemorabilias = memorabilias.filter(item => 
      Object.values(item).some(val => 
        val.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  openImageViewer(image: string) {
    this.dialog.open(VisorImagenComponent, {
      data: { image: image },
      panelClass: 'custom-dialog-container' // Clase para estilos personalizados
    });
  }

  private parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day)); // month - 1 porque en JavaScript los meses empiezan en 0
  }
  
  private isSameDay(date1: Date, date2: Date): boolean {
    console.log(date1, date2);
    return date1.getUTCDate() === date2.getUTCDate() &&
           date1.getUTCMonth() === date2.getUTCMonth() &&
           date1.getUTCFullYear() === date2.getUTCFullYear();
  }
  
}
