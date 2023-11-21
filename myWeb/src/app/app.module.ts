import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { MyfavoritesongsComponent } from './music/myfavoritesongs/myfavoritesongs.component';
import { Cancion1Component } from './music/canciones/cancion1/cancion1.component';
import { Cancion2Component } from './music/canciones/cancion2/cancion2.component';
import { Cancion3Component } from './music/canciones/cancion3/cancion3.component';
import { Cancion4Component } from './music/canciones/cancion4/cancion4.component';
import { Cancion5Component } from './music/canciones/cancion5/cancion5.component';
import { Cancion6Component } from './music/canciones/cancion6/cancion6.component';
import { Cancion7Component } from './music/canciones/cancion7/cancion7.component';
import { Cancion8Component } from './music/canciones/cancion8/cancion8.component';
import { Cancion9Component } from './music/canciones/cancion9/cancion9.component';
import { Cancion10Component } from './music/canciones/cancion10/cancion10.component';
import { Cancion11Component } from './music/canciones/cancion11/cancion11.component';
import { Cancion12Component } from './music/canciones/cancion12/cancion12.component';
import { Cancion13Component } from './music/canciones/cancion13/cancion13.component';
import { Cancion14Component } from './music/canciones/cancion14/cancion14.component';
import { Cancion15Component } from './music/canciones/cancion15/cancion15.component';
import { Cancion16Component } from './music/canciones/cancion16/cancion16.component';
import { Cancion17Component } from './music/canciones/cancion17/cancion17.component';
import { DocuseriesComponent } from './music/docuseries/docuseries.component';
import { FichaVideoComponent } from './shared/fichaVideo/fichaVideo.component';
import { FichaCancionComponent } from './shared/ficha-cancion/ficha-cancion.component';
import { HistoriaComponent } from './historia/historia.component';
import { FormsModule } from '@angular/forms';
import { PartituraComponent } from './music/canciones/partitura/partitura.component';
import { LibrosComponent } from './music/libros/libros.component';
import { FichaLibroComponent } from './shared/ficha-libro/ficha-libro.component';
import { ConciertosComponent } from './music/conciertos/conciertos.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ReproductorVideoComponent } from './shared/reproductor-video/reproductor-video.component';
import { MemorabiliaComponent } from './music/memorabilia/memorabilia.component';
import { VisorImagenComponent } from './shared/visor-imagen/visor-imagen.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    MyfavoritesongsComponent,
    Cancion1Component,
    Cancion2Component,
    Cancion3Component,
    Cancion4Component,
    Cancion5Component,   
    Cancion6Component, 
    Cancion7Component, 
    Cancion8Component,
    Cancion9Component, 
    Cancion10Component, 
    Cancion11Component,
    Cancion12Component, 
    Cancion13Component, 
    Cancion14Component,
    Cancion15Component, 
    Cancion16Component, 
    Cancion17Component,
    DocuseriesComponent, 
    FichaVideoComponent, FichaCancionComponent, HistoriaComponent, PartituraComponent, LibrosComponent, FichaLibroComponent, ConciertosComponent, ReproductorVideoComponent, MemorabiliaComponent, VisorImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // Configurar español como el locale predeterminado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
