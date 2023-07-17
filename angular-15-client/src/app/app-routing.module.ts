import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from './_shared/auth.guard';
import { ModGuard } from './_shared/mod.guard';
import { AdminGuard } from './_shared/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz que muestra el componente HomeComponent
  { path: 'message', loadChildren: () => import('./message/message-routing.module').then(m => m.MessageRoutingModule), canActivate: [AuthGuard] }, // Ruta para el módulo de mensajes (cargado de forma diferida) que requiere autenticación
  { path: '', loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule), canActivate: [AuthGuard]  }, // Ruta para el módulo de páginas (cargado de forma diferida) que requiere autenticación
  { path: '', loadChildren: () => import('./footer-content/footer-content-routing.module').then(m => m.FooterRoutingModule)}, // Ruta para el módulo de contenido del pie de página (cargado de forma diferida) que no requiere autenticación
  { path: 'login', component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: 'register', component: RegisterComponent }, // Ruta para el componente RegisterComponent
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Ruta para el componente ProfileComponent que requiere autenticación
  { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard] }, // Ruta para el componente BoardUserComponent que requiere autenticación
  { path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard,ModGuard] }, // Ruta para el componente BoardModeratorComponent que requiere autenticación y permisos de moderador
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard,AdminGuard] }, // Ruta para el componente BoardAdminComponent que requiere autenticación y permisos de administrador
  { path: '', redirectTo: '', pathMatch: 'full' } // Redirecciona la ruta raíz a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }