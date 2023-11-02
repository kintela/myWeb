import { Component } from '@angular/core';
import { videos } from '../data/videos';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {
  videos=videos;
}
