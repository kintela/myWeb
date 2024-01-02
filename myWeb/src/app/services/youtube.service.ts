import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private azureFunctionYoutubeUrl = 'https://famyweb.azurewebsites.net/api/GetApiYoutube?code=nQqZX0mDDnVSyGplUEKI63dSiZ10raS0bhIqxNq-3xpNAzFuF52r8w==';

  constructor(private http: HttpClient) { }

  getApiKey(): Observable<string> {
    return this.http.get<{apiKey: string}>(this.azureFunctionYoutubeUrl).pipe(
      //tap(response => console.log('Response from getApiKey:', response)),
      catchError(error => {
        console.error('Error in getApiKey:', error);
        return throwError(error);
      }),
      switchMap(response => {
        return of(response.apiKey);
      })
    );
  }

  getVideos(searchText: string): Observable<any> {
    return this.getApiKey().pipe(
      //tap(apiKey => console.log('API Key before switchMap in getVideos:', apiKey)),
      switchMap(apiKey => {
        if (!apiKey) {
          console.error('API Key is undefined in getVideos');
          return throwError(new Error('API Key is undefined'));
        }
        const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(searchText)}&key=${apiKey}&type=video`;
        return this.http.get(youtubeApiUrl);
      }),
      catchError(error => {
        console.error('Error in getVideos:', error);
        return throwError(error);
      })
    );
  }

  /*getVideosOLD(searchText:string): Observable<any> {

    return this.http.get('https://www.googleapis.com/youtube/v3/search?q=' + searchText + '&key=' + this.apiKey);
  }*/

}
