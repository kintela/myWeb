import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion3',
  templateUrl: './cancion3.component.html',
  styleUrls: ['./cancion3.component.scss']
})
export class Cancion3Component implements OnInit {
  nombreCancion: string;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['nombre'];
    });
  }

}
