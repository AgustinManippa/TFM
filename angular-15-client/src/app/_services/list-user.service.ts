import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model'

@Injectable({
  providedIn: 'root'
})
export class listUserService {

  private apiUrl = 'http://localhost:8080/api'; // URL base de la API

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de usuarios.
   * @returns Observable que emite un array de usuarios.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/listusers`); // Realiza una solicitud GET a la API para obtener los usuarios
  }

  /**
   * Elimina un usuario por su nombre de usuario.
   * @param username Nombre de usuario del usuario a eliminar.
   * @returns Observable que emite la respuesta de la solicitud.
   */
  deleteUserByUsername(username: string): Observable<any> {
    const url = `${this.apiUrl}/delete/${username}`; // URL de la API para eliminar un usuario por su nombre de usuario
    return this.http.delete(url); // Realiza una solicitud DELETE a la API para eliminar el usuario
  }
}