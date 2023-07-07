import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { httpInterceptorProviders } from '../_helpers/http.interceptor';
import { MarvelService } from '../_services/marvel.service';
import { PersonajesComponent } from './personajes/personajes.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { EnciclopediaComponent } from './enciclopedia/enciclopedia.component';
import { ExtrasComponent } from './extras/extras.component';
import { AppRoutingModule } from '../app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    PersonajesComponent,
    SeriesComponent,
    PagesComponent,
    ComicsComponent,
    EnciclopediaComponent,
    ExtrasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Agregar esta línea para importar ReactiveFormsModule
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders, MarvelService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class PagesModule { }