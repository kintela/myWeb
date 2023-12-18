import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  media: any[] = [];
  nextPageUrl: string; // Aquí almacenarás la URL de la próxima página de datos.

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.loadMedia();
  }

  loadMedia() {
    this.instagramService.getInstagramMedia().subscribe(response => {
      console.log(response);
      this.media = response.data;
      this.nextPageUrl = response.paging.next;
    });
  }

  loadMore() {
    if (this.nextPageUrl) {
      this.instagramService.getMoreInstagramMedia(this.nextPageUrl).subscribe(response => {
        this.media = this.media.concat(response.data);
        this.nextPageUrl = response.paging.next;
      });
    }
  }

  

}
