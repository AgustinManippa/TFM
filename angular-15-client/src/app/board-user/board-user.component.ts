import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data; // Almacenar el contenido recibido en la propiedad "content"
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error); // Intentar analizar el error como un objeto JSON
            this.content = res.message; // Si se puede extraer un mensaje del error, asignarlo a la propiedad "content"
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`; // Si no se puede analizar el error, mostrar un mensaje genérico con el estado y el texto del estado
          }
        } else {
          this.content = `Error with status: ${err.status}`; // Si no se proporciona información adicional sobre el error, mostrar un mensaje genérico con el estado
        }
      }
    });
  }
}