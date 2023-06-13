import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PagesComponent } from './pages/pages.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ComicsComponent } from './pages/comics/comics.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pages', component: PagesComponent, children:[
    { path: 'personajes', component: PersonajesComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'juegos', component: JuegosComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'comics', component: ComicsComponent },
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
