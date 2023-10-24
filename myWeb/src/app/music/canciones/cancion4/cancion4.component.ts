import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion4',
  templateUrl: './cancion4.component.html',
  styleUrls: ['./cancion4.component.scss']
})
export class Cancion4Component implements OnInit {
  nombreCancion: string;
  displayedColumns: string[] = ['video1', 'video2'];
  videos = [
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/k_ZDyiue-aU'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YTsDs4K5Kkk') },
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8Ix-cJZv5vc'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MZFhFd3pxxs') },
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8SYQY3Sa014'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rYFSKEDEeEc') },
    { video1: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/sF3SZBGrX3c'), video2: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/I952VR0sGfE') },
  ];
 constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

 ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.nombreCancion = params['nombre'];
  });
}

}
