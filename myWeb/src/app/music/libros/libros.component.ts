import { Component } from '@angular/core';
import { libros } from 'src/app/data/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent {
  libros=libros;
}
