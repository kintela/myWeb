import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { switchMap, take } from 'rxjs';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {
  clientId = "b517fa4fb32742c28cf6c76956591e87";
  code = undefined;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    if(!this.code){
      this.spotifyService.redirectToAuthCodeFlow(this.clientId)
      .pipe(take(1))
      .subscribe(authUrl => {
        window.location.href = authUrl;
      });
    }
    else {
      this.spotifyService.getAccessToken(this.clientId, this.code)
        .pipe(
          switchMap(accessToken => this.spotifyService.fetchProfile(accessToken))
        )
        .subscribe(
          profile => {
            this.populateUI(profile);
          },
          error => {
            console.error(error);
          }
        );
    }
  }

  populateUI(profile: any) {
    console.log(profile);
  }

}
