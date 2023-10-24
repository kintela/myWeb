import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion1',
  templateUrl: './cancion1.component.html',
  styleUrls: ['./cancion1.component.scss']
})
export class Cancion1Component implements OnInit {
  nombreCancion: string;
  displayedColumns: string[] = ['video1', 'video2'];
  videos = [
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4SLIdu8VGqQ'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/BJKVglbFmkA') },
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-0yp3F7wbZo'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/H1EQNL_Qwb0') },
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dKOoDBm4YR0'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Xl-BNTeJXjw') },
  ];
 constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreCancion = params['nombre'];
    });
  }
}
