import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    const user = this.storageService.getUser(); // Obtiene la información del usuario almacenada en el servicio de almacenamiento
    const roles = user.roles; // Obtiene los roles del usuario
  
    if (roles.includes('ROLE_ADMIN')) { // Verifica si el usuario tiene el rol de administrador
      return true; // Permite el acceso a la ruta protegida
    }

    this.router.navigate(['/']); // Redirige a la página principal si el usuario no tiene los roles requeridos
    return false; // Impide el acceso a la ruta protegida
  }
}