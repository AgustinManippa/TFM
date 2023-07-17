import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    // Realiza una solicitud GET al endpoint /api/test/all para obtener contenido público
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    // Realiza una solicitud GET al endpoint /api/test/user para obtener contenido para usuarios autenticados
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    // Realiza una solicitud GET al endpoint /api/test/mod para obtener contenido para moderadores
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    // Realiza una solicitud GET al endpoint /api/test/admin para obtener contenido para administradores
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}