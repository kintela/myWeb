import { Component } from '@angular/core';
import { videos } from 'src/app/data/videos';

@Component({
  selector: 'app-docuseries',
  templateUrl: './docuseries.component.html',
  styleUrls: ['./docuseries.component.scss']
})
export class DocuseriesComponent {
  videos=videos;

}
