import { Component, OnInit, ViewChild } from '@angular/core';
import { PLATOS } from '../data/platos';
import { IPlato } from '../data/IPlatos';
import { IListaCompra } from '../data/IListaCompra';

export interface PlatoEliminadoEvent {
  plato: IPlato;
  dia: string;
  tipo: string;
  orden: 'primerPlato' | 'segundoPlato' | 'postre';
}

@Component({
  selector: 'app-recetas',
  templateUrl: './planificador-menus.component.html',
  styleUrls: ['./planificador-menus.component.scss']
})

export class PlanificadorMenusComponent implements OnInit{
  categorias: string[] = [];
  platosFiltrados: any[] = [];
  categoriaSeleccionada = 'Todas';
  platoSeleccionado: IPlato;
  platoParaReceta: IPlato;
  platoEliminado:PlatoEliminadoEvent;
  listaCompra: IListaCompra;
  listaCompraAcumulada: IListaCompra[]=[]; 

  displayedColumns: string[] = ['tipo','lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
 


  dataSource = [
    { tipo: 'Comida', lunes: { primerPlato: null, segundoPlato: null, postre: null }, martes: { primerPlato: null, segundoPlato: null, postre: null }, miercolesmartes: { primerPlato: null, segundoPlato: null, postre: null },jueves: { primerPlato: null, segundoPlato: null, postre: null },viernes: { primerPlato: null, segundoPlato: null, postre: null },sabado: { primerPlato: null, segundoPlato: null, postre: null },domingo: { primerPlato: null, segundoPlato: null, postre: null },},
    { tipo: 'Cena', lunes: { primerPlato: null, segundoPlato: null, postre: null }, martes: { primerPlato: null, segundoPlato: null, postre: null }, miercolesmartes: { primerPlato: null, segundoPlato: null, postre: null },jueves: { primerPlato: null, segundoPlato: null, postre: null },viernes: { primerPlato: null, segundoPlato: null, postre: null },sabado: { primerPlato: null, segundoPlato: null, postre: null },domingo: { primerPlato: null, segundoPlato: null, postre: null },},
  ];
  


  constructor() { }

  ngOnInit(): void {    
    console.log(this.dataSource);
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

  seleccionarPlato(element: any, dia: string, tipoPlato: 'primerPlato' | 'segundoPlato' | 'postre') {
    if (!element[dia]) {
      element[dia] = { primerPlato: null, segundoPlato: null, postre: null };
    }
    element[dia][tipoPlato] = this.platoSeleccionado;
    // Asegúrate de actualizar el estado del componente para reflejar los cambios
    this.dataSource = [...this.dataSource];
  }
  

  guardarDataSource() {
    const dataStr = JSON.stringify(this.dataSource);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // Formato: 'aaaa-mm-dd'

    const exportFileDefaultName = `menuSemanal-${formattedDate}.json`;
  
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  cargarDataSource(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = (e.target.result as string);
        this.dataSource = JSON.parse(text);
      };
      reader.readAsText(file);
    }
  }

  hayDatosParaGuardar() {
    return this.dataSource.some(dia => {
      // Revisa si algún 'dia' tiene al menos un plato que no sea null
      return Object.values(dia).some(valor => valor !== null && typeof valor === 'object');
    });
  }
  
  
  mostrarFichaReceta(plato: IPlato) {
    this.platoParaReceta = plato;
  }

  

  eliminarPlato(evento: PlatoEliminadoEvent) {
    console.log(evento);
    // Accede a la propiedad específica usando el día y el tipo
    let dia = this.dataSource.find(d => d.tipo === evento.tipo);
    
    // Asegúrate de que la estructura de los datos sea la esperada
    if (dia && dia[evento.dia] && dia[evento.dia][evento.orden] === evento.plato) {
      dia[evento.dia][evento.orden] = null;
    }
  
    // Si se eliminó el plato que estaba siendo usado para la receta, elimina la referencia
    if (this.platoParaReceta === evento.plato) {
      this.platoParaReceta = null;
    }
  
    // Este paso es necesario si estás utilizando la detección de cambios predeterminada
    // Actualiza el dataSource para asegurar que los cambios se reflejen en la vista
    this.dataSource = [...this.dataSource];
  }
  



  mostrarListaCompra(item: IListaCompra) {
    console.log(item);
    this.listaCompraAcumulada.push(item); 
  }
  

}
