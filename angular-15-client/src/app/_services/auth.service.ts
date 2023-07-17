import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/'; // URL base de la API de autenticación

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) // Cabeceras de la solicitud HTTP
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  /**
   * Realiza una solicitud para iniciar sesión.
   * @param username Nombre de usuario.
   * @param password Contraseña.
   * @returns Observable que emite la respuesta de la solicitud.
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin', // URL de la API para iniciar sesión
      {
        username,
        password,
      },
      httpOptions // Opciones de la solicitud HTTP (cabeceras)
    );
  }

  /**
   * Realiza una solicitud para registrar un nuevo usuario.
   * @param username Nombre de usuario.
   * @param email Correo electrónico.
   * @param password Contraseña.
   * @returns Observable que emite la respuesta de la solicitud.
   */
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup', // URL de la API para registrar un usuario
      {
        username,
        email,
        password,
      },
      httpOptions // Opciones de la solicitud HTTP (cabeceras)
    );
  }

  /**
   * Realiza una solicitud para cerrar sesión.
   * @returns Observable que emite la respuesta de la solicitud.
   */
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions); // URL de la API para cerrar sesión
  }
}