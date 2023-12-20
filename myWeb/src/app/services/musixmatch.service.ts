import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusixmatchService {
  private azureFunctionTrack_Search_Url = 'https://famyweb.azurewebsites.net/api/ApiMusixMatchTrackSearch?code=AE65EG1izg5AN5Faa6kvEfUWr2SW38_m6IHS2eJEq-cwAzFukY2H_w==';
  private azureFunctionTrack_Lyrics_Url ='https://famyweb.azurewebsites.net/api/ApiMusixMatchTrackLyrics?code=4ARFCCySk32k0P2jU6k6FpsGjWJexri9Mk1RpXNxHFnhAzFucetH2Q=='

  constructor(private http: HttpClient) { }

  getMusixMatchTrackId(artist: string, track: string): Observable<any> {
    const params = new HttpParams()
      .set('artist', artist)
      .set('track', track);

    return this.http.get(this.azureFunctionTrack_Search_Url, { params });
  }

  getMusixMatchTrackLyrics(trackId: string): Observable<any> {
    const params = new HttpParams()
      .set('track_id', trackId);

    return this.http.get(this.azureFunctionTrack_Lyrics_Url, { params });
  }

}
