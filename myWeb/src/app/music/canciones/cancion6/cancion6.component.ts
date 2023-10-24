import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion6',
  templateUrl: './cancion6.component.html',
  styleUrls: ['./cancion6.component.scss']
})
export class Cancion6Component implements OnInit {
  nombreCancion: string;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['nombre'];
    });
  }
}
