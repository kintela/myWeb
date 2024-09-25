import { Injectable } from '@angular/core';
import { ComunService } from './comun.service';
import { MenuSemanalDTO } from '../data/DTOs/menuSemanalDTO';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuSemanalService {

  constructor(private comunService:ComunService, private http: HttpClient) { }

  verificarMenuExistente(usuarioId: number, fecha: string) {
    return this.http.get<boolean>(`${this.comunService.urlWebApi}/MenuSemanal/exists?usuarioId=${usuarioId}&fecha=${fecha}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  enviarMenuSemanal(menuSemanal: MenuSemanalDTO): Observable<MenuSemanalDTO> {
    return this.http.post<MenuSemanalDTO>(`${this.comunService.urlWebApi}/MenuSemanal`, menuSemanal)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarMenuSemanal(menuSemanalDTO: MenuSemanalDTO): Observable<MenuSemanalDTO> {
    return this.http.put<MenuSemanalDTO>(`${this.comunService.urlWebApi}/MenuSemanal?usuarioId=${menuSemanalDTO.usuarioId}&fecha=${menuSemanalDTO.fechaCreacion}`, menuSemanalDTO)
    .pipe(
      catchError(this.handleError)
    );
  }
  


  private handleError(err: HttpErrorResponse) {
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
