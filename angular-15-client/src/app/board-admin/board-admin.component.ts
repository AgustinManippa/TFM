import { Component, OnInit } from '@angular/core';
import { listUserService } from '../_services/list-user.service';
import { UserService } from '../_services/user.service';
import { User } from '../interfaces/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string; // Variable para almacenar el contenido recibido del servicio UserService
  users: User[] = []; // Arreglo para almacenar los usuarios recibidos del servicio listUserService
  username: string = ''; // Variable para almacenar el nombre de usuario a eliminar

  constructor(private userService: UserService, private listUserService: listUserService) { }

  ngOnInit(): void {
    // Inicialización del componente al cargarse

    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data; // Asigna el contenido recibido del servicio a la variable 'content'
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message; // Si hay un error con contenido JSON, asigna el mensaje de error a la variable 'content'
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`; // Si no se puede parsear el contenido JSON, muestra un mensaje de error genérico
          }
        } else {
          this.content = `Error with status: ${err.status}`; // Si no hay contenido en el error, muestra un mensaje de error con el estado del error
        }
      }
    });

    this.listUserService.getUsers().subscribe(users => {
      this.users = users; // Asigna los usuarios recibidos del servicio a la variable 'users'
    });
  }

  deleteUser(): void {
    this.listUserService.deleteUserByUsername(this.username)
      .subscribe(
        response => {
          // Si la eliminación del usuario es exitosa, muestra una notificación de éxito y recarga la página
          Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado con exito',
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        },
        error => {
          // Si hay un error al eliminar el usuario, muestra una notificación de error
          Swal.fire({
            icon: 'error',
            title: 'El usuario que quieres eliminar no existe',
            confirmButtonText: 'Ok',
          })
        }
      );
  }
}