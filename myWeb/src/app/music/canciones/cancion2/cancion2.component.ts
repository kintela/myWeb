import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion2',
  templateUrl: './cancion2.component.html',
  styleUrls: ['./cancion2.component.scss']
})
export class Cancion2Component implements OnInit {
  nombreCancion: string;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['nombre'];
    });
  }
}
  
  
