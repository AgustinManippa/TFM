import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.storageService.isLoggedIn(); // Verifica si el usuario ha iniciado sesión

    if (!isLoggedIn) { // Si el usuario no ha iniciado sesión
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      return false; // Impide el acceso a la ruta protegida
    }

    return true; // Permite el acceso a la ruta protegida
  }
}