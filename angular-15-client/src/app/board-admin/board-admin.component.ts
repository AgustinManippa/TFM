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
  content?: string;
  users: User[] = [];
  username: string = '';

  constructor(private userService: UserService, private listUserService: listUserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });

    this.listUserService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(): void {
    this.listUserService.deleteUserByUsername(this.username)
      .subscribe(
        response => {
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
          Swal.fire({
            icon: 'error',
            title: 'El usuario que quieres eliminar no existe',
            confirmButtonText: 'Ok',
          })
        }
      );
  }
}
