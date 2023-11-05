import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isScreenSmall = window.innerWidth < 768; // por ejemplo, para tablets y móviles
    //this.conciertosFiltrados = this.conciertos;
    this.conciertos = this.conciertos.sort((a, b) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    });
    this.conciertosFiltrados = [...this.conciertos]; 
    this.actualizarFiltro();
  }

  @HostListener('window:resize', ['$event'])

  actualizarFiltro(): void {
    if (this.filtroBusqueda) {
      const terminoBusqueda = this.filtroBusqueda.toLowerCase();
      this.conciertosFiltrados = this.conciertos.filter(concierto => {
        const conciertoMatch = Object.keys(concierto).some(
          key => concierto[key] && concierto[key].toString().toLowerCase().includes(terminoBusqueda)
        );
        return conciertoMatch;
      });
    } else {
      this.conciertosFiltrados = this.conciertos;
    }
  
    //console.log('conciertosFiltrados',this.conciertosFiltrados);
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
