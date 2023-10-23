import { NgModule } from '@angular/core';
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
import { Partitura1Component } from './music/canciones/cancion1/partitura1/partitura1.component';


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
    Partitura1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
