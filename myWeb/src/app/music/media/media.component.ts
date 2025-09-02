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
  // Texto libre para filtrar (nuevo)
  searchText: string = '';


  ngOnInit(): void {
    this.plataformas = this.getPlataformasUnicas();

    console.log(this.plataformas);
    console.log(this.videos);
  }
  
  getPlataformasUnicas(): string[] {
    const plataformas = this.videos
      .map(video => video.plataforma)
      .filter((valor, indice, self) => self.indexOf(valor) === indice && valor != null)
      .sort((a, b) => a.localeCompare(b)); // Orden alfabético ignorando mayúsculas/minúsculas
  
    return ['todas', ...plataformas];
  }
  

  getVideosFiltrados(): IVideo[] {
    const term = this.searchText.trim().toLowerCase();
    return this.videos.filter(video => {
      // Filtro por plataforma
      const okPlataforma = this.plataformaSeleccionada === 'todas' || video.plataforma === this.plataformaSeleccionada;
      if (!okPlataforma) return false;
      // Filtro por texto libre (en varios campos)
      if (!term) return true;
      const texto = (video.texto || '').toLowerCase();
      const categoria = (video.categoria || '').toLowerCase();
      const plataforma = (video.plataforma || '').toLowerCase();
      const info = (video.info || '').toLowerCase();
      return texto.includes(term) || categoria.includes(term) || plataforma.includes(term) || info.includes(term);
    });
  }


  getVideoCountByCategory(category: string): number {
    // Usa la lista ya filtrada por plataforma y texto para que el recuento se actualice con ambos filtros
    return this.getVideosFiltrados().filter(video =>
      video.categoria?.toLowerCase() === category.toLowerCase()
    ).length;
  }
  
}
