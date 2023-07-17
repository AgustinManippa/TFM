import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true; // Establece el estado de inicio de sesión como verdadero
      this.roles = this.storageService.getUser().roles; // Obtiene los roles del usuario almacenados en el almacenamiento local
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data); // Guarda los datos de usuario en el almacenamiento local

        this.isLoginFailed = false; // Establece el estado de inicio de sesión fallido como falso
        this.isLoggedIn = true; // Establece el estado de inicio de sesión como verdadero
        this.roles = this.storageService.getUser().roles; // Obtiene los roles del usuario almacenados en el almacenamiento local
        this.reloadPage(); // Recarga la página actual
      },
      error: err => {
        this.errorMessage = err.error.message; // Obtiene el mensaje de error del servidor
        this.isLoginFailed = true; // Establece el estado de inicio de sesión fallido como verdadero

        Swal.fire({ // Muestra una alerta de error utilizando SweetAlert2
          icon: 'error',
          title: 'Error en el inicio de sesión',
          text: err.error.message,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.reloadPage(); // Recarga la página actual después de hacer clic en 'Ok'
          }
        });
      }
    });
  }

  reloadPage(): void {
    window.location.reload(); // Recarga la página actual
  }
}