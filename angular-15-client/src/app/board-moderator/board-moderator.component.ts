import { Component, OnInit } from '@angular/core';
import { listUserService } from '../_services/list-user.service';
import { UserService } from '../_services/user.service';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content?: string; // Contenido del tablero del moderador
  users: User[] = []; // Lista de usuarios
  username: string = ''; // Nombre de usuario

  constructor(private userService: UserService, private listUserService: listUserService) { }

  ngOnInit(): void {
    // Obtener el contenido del tablero del moderador desde el servicio UserService
    this.userService.getModeratorBoard().subscribe({
      next: data => {
        this.content = data; // Asignar el contenido obtenido a la variable 'content'
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message; // Asignar el mensaje de error obtenido del backend a la variable 'content'
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`; // Mostrar el mensaje de error genérico en caso de no poder obtener el mensaje específico del backend
          }
        } else {
          this.content = `Error with status: ${err.status}`; // Mostrar el mensaje de error genérico en caso de no recibir un mensaje de error del backend
        }
      }
    });

    // Obtener la lista de usuarios desde el servicio listUserService
    this.listUserService.getUsers().subscribe(users => {
      this.users = users; // Asignar la lista de usuarios obtenida a la variable 'users'
    });
  }
}