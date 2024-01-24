import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DocuseriesComponent } from './music/docuseries/docuseries.component';
import { HistoriaComponent } from './historia/historia.component';
import { LibrosComponent } from './music/libros/libros.component';
import { ConciertosComponent } from './music/conciertos/conciertos.component';
import { MemorabiliaComponent } from './music/memorabilia/memorabilia.component';
import { Cancion17Component } from './music/canciones/cancion17/cancion17.component';
import { Cancion18Component } from './music/canciones/cancion18/cancion18.component';
import { MhcComponent } from './music/mhc/mhc.component';
import { LamentxuComponent } from './lamentxu/lamentxu.component';
import { InstagramComponent } from './instagram/instagram.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { TracksComponent } from './spotify/tracks/tracks.component';
import { AuthSpotifyService } from './guards/auth-spotify.service';
import { Cancion19Component } from './music/canciones/cancion19/cancion19.component';

const routes: Routes = [
  { path: 'cancion1', component: Cancion1Component },
  { path: 'cancion2', component: Cancion2Component },
  { path: 'cancion3', component: Cancion3Component },
  { path: 'cancion4', component: Cancion4Component },
  { path: 'cancion5', component: Cancion5Component },
  { path: 'cancion6', component: Cancion6Component },
  { path: 'cancion7', component: Cancion7Component },
  { path: 'cancion8', component: Cancion8Component },
  { path: 'cancion9', component: Cancion9Component },
  { path: 'cancion10', component: Cancion10Component },
  { path: 'cancion11', component: Cancion11Component },
  { path: 'cancion12', component: Cancion12Component },
  { path: 'cancion13', component: Cancion13Component },
  { path: 'cancion14', component: Cancion14Component },
  { path: 'cancion15', component: Cancion15Component },
  { path: 'cancion16', component: Cancion16Component },
  { path: 'cancion17', component: Cancion17Component },
  { path: 'cancion18', component: Cancion18Component },
  { path: 'cancion19', component: Cancion19Component },
  {path:'music/documentalesyseries',component: DocuseriesComponent},
  {path:'music/myfavoritesongs',component: MyfavoritesongsComponent},
  {path:'music/libros',component: LibrosComponent},
  {path:'music/conciertos',component: ConciertosComponent},  
  {path:'music/memorabilia',component: MemorabiliaComponent},
  {path:'music/mhc',component: MhcComponent},
  {path:'lamentxu',component: LamentxuComponent},
  {path:'historia',component: HistoriaComponent},
  {path:'instagram',component: InstagramComponent},
  {path:'spotify',component: SpotifyComponent},
  {
    path:'spotify/tracks',
    component: TracksComponent,
    canActivate: [AuthSpotifyService]
  },
  {path: '',component: HomeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
