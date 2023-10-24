import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion5',
  templateUrl: './cancion5.component.html',
  styleUrls: ['./cancion5.component.scss']
})
export class Cancion5Component implements OnInit {
  nombreCancion: string;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['nombre'];
    });
  }
}
