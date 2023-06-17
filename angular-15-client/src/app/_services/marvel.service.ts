import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCharacterResult } from '../interfaces/getCharactersResult';

@Injectable()
export class MarvelService {
  private backendUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

getPersonajes(limit: number): Observable<GetCharacterResult> {
      // Verificar si el límite es mayor que 0
      if (limit <= 0 || isNaN(limit)) {
        throw new Error('El límite debe ser un número entero mayor que 0.');
      }
  const url = `${this.backendUrl}/api/marvel/characters`;
  return this.http.get<GetCharacterResult>(`${url}`, {
    params: {
      limit: limit.toString(),
      offset: '0',
    },
  });
}
}