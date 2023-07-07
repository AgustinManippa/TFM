import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.storageService.isLoggedIn();

    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      return false;
    }

    return true;
  }

  isAdmin(): boolean {
  
    const user = this.storageService.getUser();
    const roles = user.roles;
  
    if (roles.includes('ROLE_ADMIN')) {
      return true;
    }
  
    console.log(roles)

    this.router.navigate(['/']); // Redirige a la página principal si el usuario no tiene los roles requeridos
    return false;
  }

  isMod(): boolean {
    const user = this.storageService.getUser();
    const roles = user.roles;
  
    if (roles.includes('ROLE_MODERATOR')) {
      return true;
    }
  
    console.log(roles)

    this.router.navigate(['/']); // Redirige a la página principal si el usuario no tiene los roles requeridos
    return false;
  }
}

