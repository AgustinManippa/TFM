import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { EnciclopediaComponent } from './enciclopedia/enciclopedia.component';
import { ExtrasComponent } from './extras/extras.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent, // Componente principal de páginas
    children: [
      { path: 'personajes', component: PersonajesComponent }, // Ruta para la página de personajes
      { path: 'series', component: SeriesComponent }, // Ruta para la página de series
      { path: 'comics', component: ComicsComponent }, // Ruta para la página de cómics
      { path: 'enciclopedia', component: EnciclopediaComponent }, // Ruta para la página de enciclopedia
      { path: 'extras', component: ExtrasComponent }, // Ruta para la página de extras
      { path: '', redirectTo: '', pathMatch: 'full' } // Ruta de redirección opcional
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }