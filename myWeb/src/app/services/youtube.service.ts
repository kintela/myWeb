import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey: string = 'AIzaSyDYOFzddqZib7P3WRWrBByWxsEFXredRqU';

  constructor(private http: HttpClient) { }

  getVideos(searchText:string): any {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?q=' + searchText + '&key=' + this.apiKey);
  }

}
