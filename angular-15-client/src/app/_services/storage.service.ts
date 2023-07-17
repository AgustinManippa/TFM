import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear(); // Limpia todos los datos almacenados en sessionStorage
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY); // Elimina cualquier usuario previamente guardado
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user)); // Guarda el usuario en sessionStorage como una cadena JSON
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY); // Obtiene el usuario almacenado en sessionStorage
    if (user) {
      return JSON.parse(user); // Si hay un usuario válido, lo convierte de JSON a objeto
    }

    return {}; // Si no hay usuario, devuelve un objeto vacío
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY); // Obtiene el usuario almacenado en sessionStorage
    if (user) {
      return true; // Si hay un usuario almacenado, se considera que ha iniciado sesión
    }

    return false; // Si no hay usuario almacenado, se considera que no ha iniciado sesión
  }
}