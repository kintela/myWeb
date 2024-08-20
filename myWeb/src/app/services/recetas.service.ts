import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaDTO } from '../data/CategoriaDTO';
import { catchError, Observable, throwError } from 'rxjs';
import { RecetaDTO } from '../data/RecetaDTO';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  urlWebApi = 'https://localhost:7228/api';

  constructor(private http: HttpClient) { }

  getCategoriasRecetas(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${this.urlWebApi}/recetas/categorias`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getRecetas(): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.urlWebApi}/recetas`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getRecetasPorCategoria(nombreCategoria: string): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.urlWebApi}/recetas/PorCategoria/${nombreCategoria}`);
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
