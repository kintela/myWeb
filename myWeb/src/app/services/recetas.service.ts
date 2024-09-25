import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RecetaDTO } from '../data/DTOs/recetaDTO';
import { ComunService } from './comun.service';
import { CategoriaDTO } from '../data/DTOs/categoriaDTO';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient, private comunService:ComunService) { }

  getCategoriasRecetas(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${this.comunService.urlWebApi}/recetas/categorias`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getRecetas(): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.comunService.urlWebApi}/recetas`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getRecetasPorCategoria(nombreCategoria: string): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.comunService.urlWebApi}/recetas/PorCategoria/${nombreCategoria}`);
  }

  getRecetasById(recetaId: number): Observable<RecetaDTO> {
    return this.http.get<RecetaDTO>(`${this.comunService.urlWebApi}/recetas/${recetaId}`);
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
