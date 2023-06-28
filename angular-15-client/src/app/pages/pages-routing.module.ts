import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { EnciclopediaComponent } from './enciclopedia/enciclopedia.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'personajes', component: PersonajesComponent },
      { path: 'series', component: SeriesComponent },
      { path: 'comics', component: ComicsComponent },
      { path: 'enciclopedia', component: EnciclopediaComponent },

    //   { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }