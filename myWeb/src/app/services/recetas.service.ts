import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { RecetaDTO } from '../data/DTOs/recetaDTO';
import { ComunService } from './comun.service';
import { CategoriaDTO } from '../data/DTOs/categoriaDTO';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient, private comunService:ComunService) { }

  /*getCategoriasRecetas(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${this.comunService.urlWebApi}/categoria`)
      .pipe(
        catchError(this.handleError)
      )
  }*/

  getRecetas(): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.comunService.urlWebApi}/recetas`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getRecetasPorCategoria(nombreCategoria: string): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.comunService.urlWebApi}/recetas/PorCategoria/${nombreCategoria}`);
  }

  getRecetasPorIngrediente(nombreIngrediente: string): Observable<RecetaDTO[]> {
    return this.http.get<RecetaDTO[]>(`${this.comunService.urlWebApi}/recetas/PorIngrediente/${nombreIngrediente}`);
  }


  getRecetasById(recetaId: number): Observable<RecetaDTO> {
    return this.http.get<RecetaDTO>(`${this.comunService.urlWebApi}/recetas/${recetaId}`);
  }

  createReceta(receta: RecetaDTO): Observable<RecetaDTO> {
    return this.http.post<RecetaDTO>(`${this.comunService.urlWebApi}/recetas`, receta)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateReceta(recetaId: number, receta: RecetaDTO, imageFile?: File): Observable<RecetaDTO> {
    if (imageFile) {
      // 1. Convertir a Base64 mediante un Observable
      return this.convertFileToBase64(imageFile).pipe(
        // 2. Una vez convertida, asignar a receta.imagen
        switchMap((base64String: string) => {
          receta.imagen = imageFile.name;
          receta.imagenFile = base64String;
          // 3. Hacer el PUT con JSON
          return this.http.put<RecetaDTO>(`${this.comunService.urlWebApi}/Recetas/${recetaId}`, receta);
        }),
        catchError(err => this.handleError(err))
      );
    } else {
      // Sin imagen, hacemos PUT directo con la receta
      return this.http.put<RecetaDTO>(`${this.comunService.urlWebApi}/Recetas/${recetaId}`, receta)
        .pipe(
          catchError(err => this.handleError(err))
        );
    }
  }

 

  private convertFileToBase64(file: File): Observable<string> {
    return new Observable<string>((observer) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Devuelve la cadena base64 con el prefijo data:<mime>;base64,...
        observer.next(reader.result as string);
        observer.complete();
      };
      reader.onerror = (error) => {
        observer.error(error);
      };
      reader.readAsDataURL(file);
    });
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
