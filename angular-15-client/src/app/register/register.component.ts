import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // Función que se ejecuta al enviar el formulario de registro
  onSubmit(): void {
    const { username, email, password } = this.form;

    // Llamada al servicio de autenticación para registrar al usuario
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        // Mostrar mensaje de registro exitoso utilizando la librería SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login']);  // Redirigir al usuario a la página de inicio de sesión
          }
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}