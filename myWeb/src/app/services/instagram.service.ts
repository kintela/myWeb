import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface InstagramResponse {
  data: any[];
  paging: {
    next: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService { 
  private functionUrl = 'https://famyweb.azurewebsites.net/api/HttpTriggerInstagram?code=tZ_akOLCcr6_rtn39D3rfiouj1jQkNOYpIC1BauEKb8bAzFuz28usg==';

  constructor(private http: HttpClient) { }

  getInstagramMedia(): Observable<InstagramResponse> {
    return this.http.get<InstagramResponse>(this.functionUrl);
  }

  getInstagramMediaOLD(url?: string): Observable<InstagramResponse> {
    return this.http.get<InstagramResponse>(url || this.functionUrl);
  }

  // Método para obtener los medios de la próxima página usando la URL de paginación.
  getMoreInstagramMedia(nextPageUrl: string): Observable<InstagramResponse> {
    return this.http.get<InstagramResponse>(nextPageUrl);
  }

  
}
