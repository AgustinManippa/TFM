import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/list-user.service';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  username: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(): void {
    this.userService.deleteUserByUsername(this.username)
      .subscribe(
        response => {
          console.log(response); // Maneja la respuesta del servidor según tus necesidades
          // Recargar la página después de eliminar el usuario
           window.location.reload();
        },
        error => {
          console.error(error); // Maneja el error según tus necesidades
        }
      );
  }

}