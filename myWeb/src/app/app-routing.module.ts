import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyfavoritesongsComponent } from './music/myfavoritesongs/myfavoritesongs.component';
import { Cancion1Component } from './music/canciones/cancion1/cancion1.component';
import { Cancion2Component } from './music/canciones/cancion2/cancion2.component';

const routes: Routes = [
  { path: 'cancion1', component: Cancion1Component },
  { path: 'cancion2', component: Cancion2Component },
  {path:'music/myfavoritesongs',component: MyfavoritesongsComponent},
  {path: '',component: HomeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
