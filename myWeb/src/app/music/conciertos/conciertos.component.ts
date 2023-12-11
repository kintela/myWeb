import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IConcierto } from 'src/app/data/IConcierto';
import { conciertos } from 'src/app/data/conciertos';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';

@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.component.html',
  styleUrls: ['./conciertos.component.scss']
})
export class ConciertosComponent implements OnInit {
  conciertos=conciertos;
  currentVideoUrl: SafeResourceUrl;
  isScreenSmall: boolean;
  conciertosFiltrados: IConcierto[] = [];
  filtroBusqueda: string = '';
  filtroGrupo: string = '';
  gruposDisponibles: string[] = [];

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.isScreenSmall = window.innerWidth < 768; // por ejemplo, para tablets y móviles
    //this.conciertosFiltrados = this.conciertos;
    this.conciertos = this.conciertos.sort((a, b) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    });
    this.conciertosFiltrados = [...this.conciertos]; 
    this.actualizarFiltro();
    this.actualizarGruposDisponibles();
  }

  @HostListener('window:resize', ['$event'])

  navegarAFotosOLD(concierto: IConcierto) {
    const formattedDate = this.formatDate(concierto.fecha);
    const queryParams = `?grupo=${encodeURIComponent(concierto.grupo)}&fecha=${formattedDate}&lugar=${encodeURIComponent(concierto.sala)}`;
    const url = `/music/memorabilia${queryParams}`;
    window.open(url, '_blank'); // Abre en una nueva pestaña
  }

  navegarAFotos(concierto: IConcierto) {
    //const formattedDate = this.formatDate(concierto.fecha);
    const queryParams = `?conciertoId=${concierto.id}`;
    const url = `/music/memorabilia${queryParams}`;
    window.open(url, '_blank'); // Abre en una nueva pestaña
  }
  
  actualizarFiltro(): void {
    let conciertosFiltrados = this.conciertos;

    // Filtra primero por búsqueda
    if (this.filtroBusqueda) {
        const terminoBusqueda = this.filtroBusqueda.toLowerCase();
        conciertosFiltrados = conciertosFiltrados.filter(concierto => {
            return Object.keys(concierto).some(
                key => concierto[key] && concierto[key].toString().toLowerCase().includes(terminoBusqueda)
            );
        });
    }

    // Filtrado por grupo, excepto cuando se selecciona 'Todos'
    if (this.filtroGrupo && this.filtroGrupo !== 'Todos') {
        conciertosFiltrados = conciertosFiltrados.filter(concierto => concierto.grupo === this.filtroGrupo);
    }

    this.conciertosFiltrados = conciertosFiltrados;
  }

  actualizarGruposDisponibles(): void {
    this.gruposDisponibles = [...new Set(this.conciertos.map(concierto => concierto.grupo))]
      .sort((a, b) => a.localeCompare(b));

    this.gruposDisponibles.unshift('Todos');
      
  }

  onResize(event) {
    this.isScreenSmall = window.innerWidth < 768;
  }

  mostrarVideo(videoUrl: string) {
    this.dialog.open(ReproductorVideoComponent, {
      data: {
        url: videoUrl
      }
    });
  }

  openImageViewer(image: string) {
    this.dialog.open(VisorImagenComponent, {
      data: { image: image },
      panelClass: 'custom-dialog-container' // Clase para estilos personalizados
    });
  }


  private formatDate(date: Date): string {
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  }
  
  
}
