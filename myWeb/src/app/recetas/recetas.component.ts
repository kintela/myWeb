import { Component, OnInit } from '@angular/core';
import { PLATOS } from '../data/platos';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  platoSeleccionado:IPlato;
  platosAgregados: IPlato[] = [];

  displayedColumns: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  fullColumns: string[] = []; // Propiedad para todas las columnas, incluido "tipo"
  datosTabla = [
    { tipo: 'Comida', platos: {} }, // Asegúrate de que 'platos' esté inicializado para evitar errores
    { tipo: 'Cena', platos: {} }
  ];
  
  
  ngOnInit(): void {
    this.fullColumns = ['tipo', ...this.displayedColumns];
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

  agregarALista(plato: IPlato) {
    this.platosAgregados.push(plato);
  }

  onCategoriaSeleccionada(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.filtrarPlatos();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  



}
