import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { switchMap, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {
  clientId = "b517fa4fb32742c28cf6c76956591e87";
  code: string | null = null;
  displayName!:string;
  id!:string;
  email!:string;
  spotifyUri!:string;
  spotifyUrl!:string
  profileImg!:string;

  constructor(private spotifyService:SpotifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.code = params['code']; // Esto captura el código de la URL
      console.log("Captured code:", this.code);

      if (this.code) {
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
      } else {
        this.spotifyService.redirectToAuthCodeFlow(this.clientId)
          .pipe(take(1))
          .subscribe(authUrl => {
            window.location.href = authUrl;
          });
      }
    });
  }

  populateUI(profile: any) {
    console.log('populateUI',profile);
    this.displayName = profile.display_name;
    this.id = profile.id;
    this.email = profile.email;
    this.spotifyUri = profile.uri;
    this.spotifyUrl = profile.external_urls.spotify;
    this.profileImg = profile.images[0].url;
  }

}
