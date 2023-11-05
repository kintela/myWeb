import { Component, OnInit } from '@angular/core';
import { ILibro } from 'src/app/data/ILibro';
import { libros } from 'src/app/data/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  libros=libros;
  librosFiltrados: ILibro[] = [];
  filtroBusqueda: string = '';

  constructor() { }

  ngOnInit(): void {
    this.librosFiltrados = this.libros;
    this.actualizarFiltro();
  }

  actualizarFiltro(): void {
    console.log('Filtro actualizado con:', this.filtroBusqueda);
  
    if (this.filtroBusqueda) {
      const terminoBusqueda = this.filtroBusqueda.toLowerCase();
      this.librosFiltrados = this.libros.filter(libro => {
        const libroMatch = Object.keys(libro).some(
          key => libro[key] && libro[key].toString().toLowerCase().includes(terminoBusqueda)
        );
        console.log(libro, libroMatch);
        return libroMatch;
      });
    } else {
      this.librosFiltrados = this.libros;
    }
  
    console.log(this.librosFiltrados);
  }
  

}
