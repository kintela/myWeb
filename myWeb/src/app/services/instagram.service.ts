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
  private baseUrl = 'https://graph.instagram.com/';

  constructor(private http: HttpClient) { }

 getMedia(userId: string, accessToken: string): Observable<InstagramResponse> {
    const url = `${this.baseUrl}${userId}/media?fields=id,media_type,media_url,caption,timestamp&access_token=${accessToken}`;
    return this.http.get<InstagramResponse>(url);
  }

  getNextPage(nextPageUrl: string): Observable<InstagramResponse> {
    return this.http.get<InstagramResponse>(nextPageUrl);
  }
}
