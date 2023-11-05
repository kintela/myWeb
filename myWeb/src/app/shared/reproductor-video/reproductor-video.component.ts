import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reproductor-video',
  templateUrl: './reproductor-video.component.html',
  styleUrls: ['./reproductor-video.component.scss']
})
export class ReproductorVideoComponent implements OnInit {
  currentVideoUrl: SafeResourceUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer,public dialogRef: MatDialogRef<ReproductorVideoComponent>) { }

  ngOnInit(): void {
    const autoplayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.data.url}?autoplay=1`);
    this.currentVideoUrl = autoplayUrl;
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
