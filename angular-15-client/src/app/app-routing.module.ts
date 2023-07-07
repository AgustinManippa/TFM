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
  { path: '', component: HomeComponent },
  { path: 'message', loadChildren: () => import('./message/message-routing.module').then(m => m.MessageRoutingModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule), canActivate: [AuthGuard]  },
  { path: '', loadChildren: () => import('./footer-content/footer-content-routing.module').then(m => m.FooterRoutingModule), canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard] },
  { path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard,ModGuard] },
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard,AdminGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }