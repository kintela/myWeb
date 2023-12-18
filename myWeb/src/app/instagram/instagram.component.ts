import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  media: any[] = [];
  mediaFiltered: any[] = [];
  nextPageUrl?: string;
  searchText = '';
  isLoadingAllMedia: boolean = false;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.loadMedia();    
  }

  loadMedia() {
    this.instagramService.getInstagramMedia().subscribe(response => {
      console.log(response);
      this.media = response.data;
      this.nextPageUrl = response.paging.next;
      this.aplicarFiltroSearch();
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

  aplicarFiltroSearch() {  
    if (this.searchText) {
      const terminoBusqueda = this.searchText.toLowerCase();
      this.mediaFiltered = this.media.filter(m => {
        return Object.keys(m).some(key => m[key] && m[key].toString().toLowerCase().includes(terminoBusqueda));
      });
    } else {
      this.mediaFiltered = this.media;
    }  
  }

  loadAllMedia(url?: string) {
    /*if (!url && this.isLoadingAllMedia) {
      return;
    }
    
    this.isLoadingAllMedia = true;
    this.instagramService.getInstagramMedia(url).subscribe(response => {
      this.media = this.media.concat(response.data);
      console.log(this.media);
      this.nextPageUrl = response.paging.next;
      if (this.nextPageUrl) {
        this.loadAllMedia(this.nextPageUrl);
      } else {
        this.isLoadingAllMedia = false;
        this.aplicarFiltroSearch(); 
      }
    },
    error => console.error(error),
    ()=>{
      console.log(this.media);
    });*/
  }

}
