import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  private roles: string[] = [];
  isLoggedIn = false; // Variable para rastrear si el usuario ha iniciado sesión
  showAdminBoard = false; // Variable para mostrar o ocultar el panel de administrador
  showModeratorBoard = false; // Variable para mostrar o ocultar el panel de moderador
  username?: string; // Variable para almacenar el nombre de usuario

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router // Inyectamos el servicio Router para redireccionar
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn(); // Comprobamos si el usuario ha iniciado sesión

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN'); // Comprobamos si el usuario tiene el rol de administrador
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR'); // Comprobamos si el usuario tiene el rol de moderador

      this.username = user.username; // Obtenemos el nombre de usuario
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean(); // Eliminamos los datos de autenticación almacenados

        this.router.navigate(['/home']); // Redirigimos al usuario a la página de inicio
      },
      error: err => {
        console.log(err);
      }
    });
  }
}