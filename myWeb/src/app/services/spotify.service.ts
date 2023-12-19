import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  redirectToAuthCodeFlow(clientId: string): Observable<string> {
    const verifier = this.generateCodeVerifier(128);
    return this.generateCodeChallenge(verifier).pipe(
      map(challenge => {
        localStorage.setItem("verifier", verifier);

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", "http://localhost:4200/spotify");
        params.append("scope", "user-read-private user-read-email");
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
    params.append("redirect_uri", "http://localhost:4200/spotify");
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

private generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
}
