import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  redirect_uri= "http://localhost:4200/spotify";
  //redirect_uri = "https://kintela.es/spotify";

  constructor(private http: HttpClient) { }

  redirectToAuthCodeFlow(clientId: string): Observable<string> {
    const verifier = this.generateCodeVerifier(128);
    return this.generateCodeChallenge(verifier).pipe(
      map(challenge => {
        localStorage.setItem("verifier", verifier);

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", this.redirect_uri);
        params.append("scope", "user-read-private user-read-email playlist-read-private playlist-read-collaborative");
        params.append("code_challenge_method", "S256");
        params.append("code_challenge", challenge);

        return `https://accounts.spotify.com/authorize?${params.toString()}`;
      })
    );
  }

  getAccessToken(clientId: string, code: string) : Observable<string>{
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", this.redirect_uri);
    params.append("code_verifier", verifier!);

    return from(
      fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
      }).then(response => response.json())
       .then(data => data.access_token as string)
    );
  }

  fetchProfile(token: string): Observable<any> {
    return from(
      fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => response.json())
    );
}

fetchUserPlaylistsOLD(token: string): Observable<any> {
  const headers = new Headers({
    'Authorization': `Bearer ${token}`
  });
  
  return from(fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: headers
  }).then(response => response.json()));
}

fetchUserPlaylists(token: string, url: string = "https://api.spotify.com/v1/me/playlists"): Observable<any> {
  const headers = new Headers({
    'Authorization': `Bearer ${token}`
  });
  
  return from(fetch(url, {
    method: "GET",
    headers: headers
  }).then(response => response.json()));
}


fetchAllPlaylists(accessToken: string, url: string): Observable<any[]> {
  return this.fetchUserPlaylists(accessToken, url).pipe(
    switchMap(data => {
      if (data.next) {
        // Si hay más datos, combina los resultados actuales con los siguientes
        return this.fetchAllPlaylists(accessToken, data.next).pipe(
          map(nextData => data.items.concat(nextData))
        );
      } else {
        // Si no hay más datos, devuelve los resultados actuales
        return of(data.items);
      }
    })
  );
}


generateCodeChallenge(codeVerifier: string):Observable<string> {
  return from(
    window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier))
      .then(buffer => {
        const hash = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
        return hash;
      })
  );
}

fetchTracks(accessToken: string, playlistId: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${accessToken}`
  });

  return this.http.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });
}


private generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
}
