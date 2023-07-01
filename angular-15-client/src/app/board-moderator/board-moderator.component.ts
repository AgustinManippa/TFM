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
  content?: string;
  users: User[] = [];
  username: string = '';

  constructor(private userService: UserService, private listUserService: listUserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
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
}
