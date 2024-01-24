import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion19',
  templateUrl: './cancion19.component.html',
  styleUrls: ['./cancion19.component.scss']
})
export class Cancion19Component implements OnInit{
  nombreCancion: string;
  grupo:string;
  album:string;
  anio:number;
  currentVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['titulo'];
      this.grupo = params['grupo'];
      this.album = params['album'];
      this.anio = params['anio'];
    });
  }

  setVideo(url: string): void {
    const autoplayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    this.currentVideoUrl = autoplayUrl;
  }

}
