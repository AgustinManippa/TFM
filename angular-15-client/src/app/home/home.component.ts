import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string; // Variable para almacenar el contenido

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Lógica que se ejecuta al inicializar el componente
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data; // Asigna el contenido obtenido del servicio
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error); // Intenta parsear el error como JSON
            this.content = res.message; // Asigna el mensaje de error del objeto JSON
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`; // Muestra un mensaje de error genérico
          }
        } else {
          this.content = `Error with status: ${err.status}`; // Muestra un mensaje de error genérico sin cuerpo de respuesta
        }
      }
    });
  }
}