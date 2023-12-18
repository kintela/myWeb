import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  userId = '24825226683742385';
  accessToken='IGQWROMUlESHBfMk9uTTYtMW9OdXR1ckxKY3ZAiSE9iVUVTVkRDLXRGdm1lR3djZAnIzdkRjWGwzamx0cXZAoMFVjRkFBSjB3LXN5X3ppYUpDUDNPNjFXWklpTXZAtc2hmQjZAndjVDU0NuQlR2UQZDZD'

  media: any[] = [];
  nextPageUrl: string | null = null;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.loadMedia();
  }

  loadMedia() {
    this.instagramService.getMedia(this.userId, this.accessToken).subscribe(response => {
      this.media = response.data;
      this.nextPageUrl = response.paging && response.paging.next ? response.paging.next : null;
    });
  }

  loadMore() {
    if (this.nextPageUrl) {
      this.instagramService.getNextPage(this.nextPageUrl).subscribe(response => {
        this.media = this.media.concat(response.data);
        this.nextPageUrl = response.paging && response.paging.next ? response.paging.next : null;
      });
    }
  }

}
