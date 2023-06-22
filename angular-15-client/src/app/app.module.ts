import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PagesComponent } from './pages/pages.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { MarvelService } from './_services/marvel.service';
import { ChatWindowComponent} from './message/chat-window/chat-window.component';
import { ConversationListComponent } from './message/conversation-list/conversation-list.component';
import { MessageFormComponent } from './message/message-form/message-form.component';
import { ConversationService } from './_services/conversation.service';
import { MessageComponent } from './message/message.component';
import { UserService } from './_services/list-user.service';
import { UserListComponent } from './list-user/list-user.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    PersonajesComponent,
    PeliculasComponent,
    SeriesComponent,
    JuegosComponent,
    VideosComponent,
    PagesComponent,
    ComicsComponent,
    MessageComponent,
    ChatWindowComponent,
    MessageFormComponent,
    ConversationListComponent,
    UserListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:8080'], // Reemplaza esto con tu dominio permitido
        disallowedRoutes: ['http://example.com/exampleapi/'], // Reemplaza esto con tus rutas deshabilitadas
      },
    }),
  ],
  providers: [httpInterceptorProviders,MarvelService,ConversationService,UserService,JwtHelperService],
  bootstrap: [AppComponent],
})
export class AppModule { }
