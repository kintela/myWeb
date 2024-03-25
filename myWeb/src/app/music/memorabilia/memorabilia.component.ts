import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IMemorabilia } from 'src/app/data/IMemorabilia';
import { memorabilias } from 'src/app/data/memorabilias';
import { memorabilias2 } from 'src/app/data/memorabilias2';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-memorabilia',
  templateUrl: './memorabilia.component.html',
  styleUrls: ['./memorabilia.component.scss']
})
export class MemorabiliaComponent implements OnInit {
  memorabilias1=memorabilias
  memorabilias2=memorabilias2;
  memorabilias:IMemorabilia[];

  searchText = '';
  filteredMemorabilias: IMemorabilia[] = [];

  filtroPersonas = 'todos';

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router, private location: Location) { }  

  ngOnInit(): void {
    this.memorabilias = [...this.memorabilias1, ...this.memorabilias2];

    // Suponiendo que 'memorabilias' es tu array de objetos memorabilia
    const memorabiliasSinPersonas = memorabilias.filter(memorabilia => !memorabilia.personas);

    console.log('Memorabilias sin la propiedad personas:', memorabiliasSinPersonas);
    
    this.filteredMemorabilias = this.memorabilias;

    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['conciertoId']) {
        const conciertoId = +queryParams['conciertoId'];
  
        this.aplicarFiltroConcierto(conciertoId);
      } 
      if(queryParams['search']){
        this.searchText = queryParams['search'];        

        this.aplicarFiltroSearch();
      }

      if (queryParams['filtro']) {
        this.filtroPersonas = queryParams['filtro'];
        this.aplicarFiltros(); // Este método ya debe estar preparado para aplicar ambos filtros
      }
    });

    const faltantes = this.encontrarNumerosFaltantes(this.memorabilias);
    console.log("faltan estos numeros",faltantes);
  
  }
  

  aplicarFiltroConcierto(conciertoId: number) {
    const queryParams: any = {};
    queryParams['conciertoId'] = conciertoId;

    this.filteredMemorabilias = this.filteredMemorabilias.filter(memorabilia =>memorabilia.conciertoId===conciertoId);
    
    const url = this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString();
    this.location.go(url);
  }

  aplicarFiltroSearch() {
    const queryParams: any = {};
  
    if (this.searchText) {
      queryParams['search'] = this.searchText;
      const terminoBusqueda = this.searchText.toLowerCase();
      this.filteredMemorabilias = this.memorabilias.filter(m => {
        return Object.keys(m).some(key => m[key] && m[key].toString().toLowerCase().includes(terminoBusqueda));
      });
    } else {
      // Si searchText está vacío, simplemente muestra todas las memorabilias
      this.filteredMemorabilias = this.memorabilias;
    }
  
    // Crear una nueva URL con los queryParams actualizados
    const url = this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString();
    this.location.go(url);
  }

  aplicarFiltros() {
    const terminoBusqueda = this.searchText.toLowerCase();
  
    this.filteredMemorabilias = this.memorabilias.filter(memorabilia => {
      const coincideTexto = terminoBusqueda 
        ? Object.keys(memorabilia).some(key =>memorabilia[key] && memorabilia[key].toString().toLowerCase().includes(terminoBusqueda)
      ) : true;

      const personasArray = (memorabilia.personas || '').split(/,| y /).map(s => s.trim()).filter(Boolean);
      const numPersonas = personasArray.length;
  
      const coincideCategoria =
        (this.filtroPersonas === 'todos') ||
        (this.filtroPersonas === 'solitario' && numPersonas === 1) ||
        (this.filtroPersonas === 'parejas' && numPersonas === 2) ||
        (this.filtroPersonas === 'trios' && numPersonas === 3) ||
        (this.filtroPersonas === 'cuadrillas' && numPersonas > 3);
  
      return coincideTexto && coincideCategoria;
    });
  
    this.actualizarURL();
  }
  

  
  actualizarURL() {
    const queryParams: any = {};
    if (this.searchText) queryParams['search'] = this.searchText;
    if (this.filtroPersonas !== 'todos') queryParams['filtro'] = this.filtroPersonas;
  
    const url = this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString();
    this.location.go(url);
  }
  
  

  
  /*applyFilter() {
    this.filteredMemorabilias = this.memorabilias.filter(item => 
      Object.values(item).some(val => 
        val.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }*/

  openImageViewer(image: string) {
    this.dialog.open(VisorImagenComponent, {
      data: { image: image , origen:'memorabilia'},
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
    const numerosImagenes = new Set(this.memorabilias.map(m => parseInt(m.imagen.split('.')[0])));

    // Crear un arreglo para los números faltantes
    let numerosFaltantes: number[] = [];

    // Recorrer desde 1 hasta el número máximo (704 en tu caso)
    for (let i = 1; i <= 1864; i++) {
        if (!numerosImagenes.has(i)) {
            // Si el número no está en tu conjunto, añadirlo a la lista de faltantes
            numerosFaltantes.push(i);
        }
    }

    return numerosFaltantes;
}
  
}
