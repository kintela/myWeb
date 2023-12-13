import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IConcierto } from 'src/app/data/IConcierto';
import { conciertos } from 'src/app/data/conciertos';
import { ReproductorVideoComponent } from 'src/app/shared/reproductor-video/reproductor-video.component';
import { VisorImagenComponent } from 'src/app/shared/visor-imagen/visor-imagen.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog, private router: Router,private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.route.queryParams.subscribe(params => {
      if (params['search']) {
        this.filtroBusqueda = params['search'];
      }
      if (params['grupo']) {
        this.filtroGrupo = params['grupo'];
      }

  
      this.isScreenSmall = window.innerWidth <= 1080;

      this.conciertos = this.conciertos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      this.conciertosFiltrados = [...this.conciertos]; 
  
      this.actualizarFiltro();
      this.actualizarGruposDisponibles();
    });
  }
    

  @HostListener('window:resize', ['$event'])


  navegarAFotos(concierto: IConcierto) {
    const queryParams = `?conciertoId=${concierto.id}`;
    const url = `/music/memorabilia${queryParams}`;
    window.open(url, '_blank'); // Abre en una nueva pestaña
  }

  
  actualizarFiltro(): void {
    let conciertosFiltrados = this.conciertos;
  
    const queryParams: any = {};
  
    // Filtra primero por búsqueda
    if (this.filtroBusqueda) {
      const terminoBusqueda = this.filtroBusqueda.toLowerCase();
      conciertosFiltrados = conciertosFiltrados.filter(concierto => {
        return Object.keys(concierto).some(
          key => concierto[key] && concierto[key].toString().toLowerCase().includes(terminoBusqueda)
        );
      });
      queryParams.search = this.filtroBusqueda; // Añade el parámetro search a los queryParams
    }
  
    // Filtrado por grupo, excepto cuando se selecciona 'Todos'
    if (this.filtroGrupo && this.filtroGrupo !== 'Todos') {
      conciertosFiltrados = conciertosFiltrados.filter(concierto => concierto.grupo === this.filtroGrupo);
      queryParams.grupo = this.filtroGrupo; // Añade el parámetro grupo a los queryParams
    }
  
    // Actualiza la URL con los queryParams adecuados
    const url = this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString();
    this.location.go(url);
  
    this.conciertosFiltrados = conciertosFiltrados;
  }
  
  
  actualizarGruposDisponibles(): void {
    this.gruposDisponibles = [...new Set(this.conciertos
      .map(concierto => concierto.grupo)
      .filter(grupo => grupo)) // Filtra cualquier grupo falso, como null, undefined o cadenas vacías.
    ].sort((a, b) => a.localeCompare(b));
  
    this.gruposDisponibles.unshift('Todos');

    console.log('this.gruposDisponibles',this.gruposDisponibles);
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
  
}
