import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ModGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    const user = this.storageService.getUser(); // Obtener información del usuario actual
    const roles = user.roles; // Obtener los roles del usuario

    if (roles.includes('ROLE_MODERATOR')) { // Verificar si el usuario tiene el rol de "moderador"
      return true; // Permitir el acceso a la ruta protegida
    }

    this.router.navigate(['/']); // Redirigir al usuario a la página principal si no tiene los roles requeridos
    return false; // Denegar el acceso a la ruta protegida
  }
}