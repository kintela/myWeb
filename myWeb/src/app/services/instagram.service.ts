import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, mergeMap, retryWhen, throwError, timer } from 'rxjs';

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

 
  getMoreInstagramMedia(nextPageUrl: string): Observable<InstagramResponse> {
    return this.http.get<InstagramResponse>(nextPageUrl);
  }

  

  
}
