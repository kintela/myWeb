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

  ngOnInitOLD(): void {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['grupo'] && queryParams['fecha'] && queryParams['lugar']) {
        const grupo = decodeURIComponent(queryParams['grupo']);
        const fecha = this.parseDate(queryParams['fecha']);
        const lugar = decodeURIComponent(queryParams['lugar']);

        console.log(grupo, fecha, lugar);
  
        //this.aplicarFiltroRuta(grupo, fecha, lugar);

      } else {
        this.filteredMemorabilias = memorabilias;
      }
    });

    const faltantes = this.encontrarNumerosFaltantes(memorabilias);
    console.log("faltan estos numeros",faltantes);
  
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['conciertoId']) {
        const conciertoId = +queryParams['conciertoId'];

        console.log('conciertoId', conciertoId);
  
        this.aplicarFiltroRuta(conciertoId);

      } else {
        this.filteredMemorabilias = memorabilias;
      }
    });

    const faltantes = this.encontrarNumerosFaltantes(memorabilias);
    console.log("faltan estos numeros",faltantes);
  
  }


  aplicarFiltroRutaOLD(grupo: string, fecha: Date, lugar: string) {
    this.filteredMemorabilias = this.memorabilias.filter(memorabilia => {
      const grupoCoincide = memorabilia.grupo ? memorabilia.grupo.toLowerCase() === grupo.toLowerCase() : false;
      const lugarCoincide = memorabilia.lugar ? memorabilia.lugar.toLowerCase() === lugar.toLowerCase() : false;
      const fechaCoincide = memorabilia.fecha ? this.isSameDay(memorabilia.fecha, fecha) : false;
  
      return grupoCoincide && lugarCoincide && fechaCoincide;
    });
  }

  aplicarFiltroRuta(conciertoId: number) {
    this.filteredMemorabilias = this.memorabilias.filter(memorabilia =>memorabilia.conciertoId===conciertoId);
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
    return date1.getUTCDate() === date2.getUTCDate() &&
           date1.getUTCMonth() === date2.getUTCMonth() &&
           date1.getUTCFullYear() === date2.getUTCFullYear();
  }

  private encontrarNumerosFaltantes(memorabilias: IMemorabilia[]): number[] {
    // Crear un conjunto con todos los números de imagen que tienes
    const numerosImagenes = new Set(memorabilias.map(m => parseInt(m.imagen.split('.')[0])));

    // Crear un arreglo para los números faltantes
    let numerosFaltantes: number[] = [];

    // Recorrer desde 1 hasta el número máximo (704 en tu caso)
    for (let i = 1; i <= 704; i++) {
        if (!numerosImagenes.has(i)) {
            // Si el número no está en tu conjunto, añadirlo a la lista de faltantes
            numerosFaltantes.push(i);
        }
    }

    return numerosFaltantes;
}
  
}
