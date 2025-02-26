import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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
    const formData: FormData = new FormData();
    //formData.append('receta', new Blob([JSON.stringify(receta)], { type: 'application/json' }));
    formData.append('Receta', JSON.stringify(receta));
  
    if (imageFile) {
      formData.append('Image', imageFile, imageFile.name);
    }
  
    // Verificar el contenido de formData
    formData.forEach((value, key) => {
      console.log(key, value);
    });
  
    return this.http.put<RecetaDTO>(`${this.comunService.urlWebApi}/recetas/${recetaId}`, formData)
      .pipe(
        catchError(this.handleError)
    );
  }

 

  /*uploadImage(image: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);
  
    return this.http.post(`${this.comunService.urlWebApi}/recetas/UploadImage`, formData, { responseType: 'text' }).pipe(
      map((response: string) => response),
      catchError(this.handleError)
    );
  }*/


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
