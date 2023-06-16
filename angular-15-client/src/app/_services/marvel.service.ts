import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCharacterResult } from '../interfaces/getCharactersResult';

@Injectable()
export class MarvelService {
  private backendUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

//   getPersonajes() {
//     const url = `${this.backendUrl}/api/marvel/characters`;
//     return this.http.get(url);
//   }
// }

getPersonajes(limit: number): Observable<GetCharacterResult> {
  const url = `${this.backendUrl}/api/marvel/characters`;
  return this.http.get<GetCharacterResult>(`${url}`, {
    params: {
      limit: limit.toString(),
      offset: '0',
    },
  });
}
}