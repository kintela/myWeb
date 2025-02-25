import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComunService } from './comun.service';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoriaDTO } from '../data/DTOs/categoriaDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, private comunService:ComunService) { }

  getCategoriasRecetas(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${this.comunService.urlWebApi}/categorias`)
      .pipe(
        catchError(this.handleError)
      )
  }

  createCategoria(categoria: CategoriaDTO): Observable<CategoriaDTO> {
      return this.http.post<CategoriaDTO>(`${this.comunService.urlWebApi}/categorias`, categoria)
        .pipe(
          catchError(this.handleError)
        );
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
