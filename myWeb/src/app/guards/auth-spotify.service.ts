import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const accessToken = localStorage.getItem('spotifyAccessToken');
      if (!accessToken) {
        console.log('Access Token is not available');
        // Redirige al usuario a la página de inicio de sesión o cualquier otra página
        return this.router.createUrlTree(['']);
      }
      return true;
  }
}
