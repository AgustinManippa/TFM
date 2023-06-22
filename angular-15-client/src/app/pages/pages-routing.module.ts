import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { JuegosComponent } from './juegos/juegos.component';
import { VideosComponent } from './videos/videos.component';
import { ComicsComponent } from './comics/comics.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'personajes', component: PersonajesComponent },
      { path: 'peliculas', component: PeliculasComponent },
      { path: 'series', component: SeriesComponent },
      { path: 'juegos', component: JuegosComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'comics', component: ComicsComponent },
    //   { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }