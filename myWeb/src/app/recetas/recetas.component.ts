import { Component, OnInit, ViewChild } from '@angular/core';
import { PLATOS } from '../data/platos';
import { IPlato } from '../data/IPlatos';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit{
  categorias: string[] = [];
  platosFiltrados: any[] = [];
  categoriaSeleccionada = 'Todas';
  platoSeleccionado: IPlato;

  displayedColumns: string[] = ['tipo','lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
 
  dataSource = [
    { tipo: 'Comida', lunes: null, martes: null, miércoles: null, jueves: null, viernes: null, sábado: null, domingo: null },
    { tipo: 'Cena', lunes: null, martes: null, miércoles: null, jueves: null, viernes: null, sábado: null, domingo: null }
  ];

    
  constructor() { }

  ngOnInit(): void {
    const categoriasUnicas = [...new Set(PLATOS.flatMap(plato => plato.categorias))];
    categoriasUnicas.sort();

    this.categorias = [...categoriasUnicas, 'Todas'];

    this.filtrarPlatos();
  }

  filtrarPlatos() {
    if (this.categoriaSeleccionada === 'Todas') {
      this.platosFiltrados = PLATOS;
    } else {
      this.platosFiltrados = PLATOS.filter(plato => plato.categorias.includes(this.categoriaSeleccionada));
    }
    this.platosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }


  onCategoriaSeleccionada(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.filtrarPlatos();
  }

  seleccionarPlato(element: any, dia: string) {
    if (this.platoSeleccionado) {
      element[dia] = this.platoSeleccionado;
    }
    console.log(this.dataSource);
  }


}
