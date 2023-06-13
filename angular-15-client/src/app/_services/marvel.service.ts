import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCharacterResult } from '../interfaces/get-characters-result.interface';

// @Injectable({
//   providedIn: 'root'
// })

// export class MarvelService {

//   private marvelApiUrl = 'http://gateway.marvel.com/';

//   constructor(private readonly http: HttpClient) {}

//   getPersonajes(limit: number): Observable<GetCharacterResult[]> {
//       return this.http.get<GetCharacterResult[]>(this.marvelApiUrl+'v1/public/characters', {
//           params: {
//               limit: limit,
//               offset: 0,
//           },
//       });
//   }
// }

@Injectable()
export class MarvelService {
  private backendUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  getPersonajes(limit: number, offset: number) {
    const url = `${this.backendUrl}/marvel-characters`;

    return this.http.get(url, { params: { limit: limit.toString(), offset: offset.toString() } });
  }
}