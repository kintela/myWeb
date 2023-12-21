import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusixmatchService {
  private azureFunctionTrack_Search_Url = 'https://famyweb.azurewebsites.net/api/GetTrackIdMusixMatch?code=X8jpO0avfPhDKeo3s-M3LMPrDtAO8CV7V1U0AHTX-teFAzFuKjJ8xQ==';
  private azureFunctionTrack_Lyrics_Url ='https://famyweb.azurewebsites.net/api/GetLyricsMusixMatch?code=I1ROkI4e8f98iOcDXsTb_1t3vbdHiZ5fqsDSAo4AzTiyAzFupUuvvw=='

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
