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
import { SeriesComponent } from './pages/series/series.component';
import { PagesComponent } from './pages/pages.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { MarvelService } from './_services/marvel.service';
import { ConversationListComponent } from './message/conversation-list/conversation-list.component';
import { MessageFormComponent } from './message/message-form/message-form.component';
import { ConversationService } from './_services/conversation.service';
import { MessageComponent } from './message/message.component';
import { UserService } from './_services/list-user.service';
import { UserListComponent } from './list-user/list-user.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EnciclopediaComponent } from './pages/enciclopedia/enciclopedia.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { AboutUsComponent } from './footer-content/about-us/about-us.component';
import { ServicesComponent } from './footer-content/services/services.component';
import { ContactComponent } from './footer-content/contact/contact.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { BlogComponent } from './footer-content/blog/blog.component';
import { FAQsComponent } from './footer-content/faqs/faqs.component';
import { TermsConditionsComponent } from './footer-content/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './footer-content/privacy-policy/privacy-policy.component';

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
    SeriesComponent,
    PagesComponent,
    ComicsComponent,
    EnciclopediaComponent,
    ExtrasComponent,
    MessageComponent,
    MessageFormComponent,
    ConversationListComponent,
    UserListComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    FooterContentComponent,
    BlogComponent,
    FAQsComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent
  
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
  providers: [httpInterceptorProviders,MarvelService,ConversationService,UserService,JwtHelperService, { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent],
})
export class AppModule { }
