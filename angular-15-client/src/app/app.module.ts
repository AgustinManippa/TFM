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
import { ConversationListComponent } from './message/conversation-list/conversation-list.component';
import { MessageFormComponent } from './message/message-form/message-form.component';
import { MessageComponent } from './message/message.component';
import { listUserService } from './_services/list-user.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { ConversationService } from './_services/conversation.service';
import { FooterModule } from './footer-content/footer-content.module';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

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
    ConversationListComponent,
    MessageFormComponent,
    MessageComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PagesModule,
    FooterModule,
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

  providers: [httpInterceptorProviders,ConversationService,listUserService,JwtHelperService, { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent],
})
export class AppModule { }
