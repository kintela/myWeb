import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { conciertos } from 'src/app/data/conciertos';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';

@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.component.html',
  styleUrls: ['./conciertos.component.scss']
})
export class ConciertosComponent {
  conciertos=conciertos;
  currentVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) { }

  setVideo(url: string): void {
    const autoplayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    this.currentVideoUrl = autoplayUrl;
  }

  mostrarVideo(videoUrl: string) {
    this.dialog.open(ReproductorVideoComponent, {
      data: {
        url: videoUrl
      }
    });
  }
}
