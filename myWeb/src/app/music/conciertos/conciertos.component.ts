import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IConcierto } from 'src/app/data/IConcierto';
import { conciertos } from 'src/app/data/conciertos';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';

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


  navegarAFotos(concierto: IConcierto) {
    this.router.navigate(['/memorabilia', concierto.grupo, concierto.fecha, concierto.sala]);
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
}
