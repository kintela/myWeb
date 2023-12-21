import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private azureFunctionYoutubeUrl = 'https://famyweb.azurewebsites.net/api/GetApiYoutube?code=nQqZX0mDDnVSyGplUEKI63dSiZ10raS0bhIqxNq-3xpNAzFuF52r8w==';

  constructor(private http: HttpClient) { }

  getApiKey(): Observable<string> {
    return this.http.get<{ApiKey: string}>(this.azureFunctionYoutubeUrl).pipe(
      catchError(error => {
        // Manejo de errores si la solicitud a Azure Function falla
        return throwError(error);
      }),
      switchMap(response => {
        // Si la respuesta es exitosa, extrae la API Key
        return response.ApiKey;
      })
    );
  }

  getVideos(searchText: string): Observable<any> {
    return this.getApiKey().pipe(
      switchMap(apiKey => {
        // Realiza la solicitud a la API de YouTube con la API Key recuperada
        const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(searchText)}&key=${apiKey}`;
        return this.http.get(youtubeApiUrl);
      }),
      catchError(error => {
        // Manejo de errores si la solicitud a la API de YouTube falla
        return throwError(error);
      })
    );
  }

  /*getVideosOLD(searchText:string): Observable<any> {

    return this.http.get('https://www.googleapis.com/youtube/v3/search?q=' + searchText + '&key=' + this.apiKey);
  }*/

}
