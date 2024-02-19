import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/data/IVideo';
import { dvds } from 'src/app/data/dvds';
import { frases } from 'src/app/data/frases';
import { videos } from 'src/app/data/videos';
import { vinilos } from 'src/app/data/vinilos';

@Component({
  selector: 'app-docuseries',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit{
  videos=videos;
  vinilos=vinilos;
  frases=frases;
  plataformas: string[] = [];
  plataformaSeleccionada: string = 'todas';
  dvds=dvds;

  ngOnInit(): void {
    this.plataformas = this.getPlataformasUnicas();

    console.log(this.plataformas);
  }
  
  getPlataformasUnicas(): string[] {
    const plataformas = this.videos
      .map(video => video.plataforma)
      .filter((valor, indice, self) => self.indexOf(valor) === indice && valor != null)
      .sort((a, b) => a.localeCompare(b)); // Orden alfabético ignorando mayúsculas/minúsculas
  
    return ['todas', ...plataformas];
  }
  

  getVideosFiltrados(): IVideo[] {
    if (this.plataformaSeleccionada === 'todas') {
      return this.videos;
    } else {
      return this.videos.filter(video => video.plataforma === this.plataformaSeleccionada);
    }
  }


  getVideoCountByCategory(category: string): number {
    return this.videos.filter(video =>
      video.categoria?.toLowerCase() === category &&
      (this.plataformaSeleccionada === 'todas' || video.plataforma === this.plataformaSeleccionada)
    ).length;
  }
  
}
