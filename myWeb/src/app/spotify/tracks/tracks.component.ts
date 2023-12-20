import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit{
  tracks: any[] = [];
  displayedColumns: string[] = ['caratula','pista', 'album', 'artista']; 
  dataSource: MatTableDataSource<any>;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    const accessToken = localStorage.getItem('spotifyAccessToken');
    this.route.queryParams.subscribe(params => {
      const playlistId = params['playlistId'];
      if (playlistId) {
        this.spotifyService.fetchTracks(accessToken, playlistId).subscribe(tracks => {
          console.log('Tracks:', tracks.items);
          this.tracks = tracks.items;
          this.dataSource = new MatTableDataSource(tracks.items);
          
        }, error => {
          console.error('Error fetching tracks:', error);
        });
      }
    });
  }

}
