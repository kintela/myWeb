import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }
  
  abrirRuta(ruta: string) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([ruta])
    );
    window.open(url, '_blank');
  }
}
