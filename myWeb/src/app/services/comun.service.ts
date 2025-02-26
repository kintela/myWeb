import { Injectable } from '@angular/core';
import { CategoriaDTO } from '../data/DTOs/categoriaDTO';

@Injectable({
  providedIn: 'root'
})
export class ComunService {
  urlWebApi = 'https://localhost:7228/api';
  //urlWebApi = 'https://kintelaapi-e0axhtfzdzdycqec.northeurope-01.azurewebsites.net/api';

  private categorias: CategoriaDTO[] = [];

  setCategorias(categorias: CategoriaDTO[]): void {
    this.categorias = categorias;
  }

  getCategorias(): CategoriaDTO[] {
    return this.categorias;
  }
  
  constructor() { }
}
