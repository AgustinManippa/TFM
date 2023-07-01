import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCharacterResult, GetComicsResult, GetExtrasResult, GetSeriesResult} from '../interfaces/marvel.model';

@Injectable()
export class MarvelService {
  private backendUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

// MarvelService
getPersonajes(limit: number, offset: number): Observable<GetCharacterResult> {
  if (limit <= 0 || isNaN(limit) || offset < 0 || isNaN(offset)) {
    throw new Error('El límite y el offset deben ser números enteros mayores o iguales a 0.');
  }

  const url = `${this.backendUrl}/api/marvel/characters`;
  return this.http.get<GetCharacterResult>(url, {
    params: {
      limit: String(limit), // Convertir a cadena de texto
      offset: String(offset), // Convertir a cadena de texto
    },
  });
}

getComics(limit: number, offset: number): Observable<GetComicsResult> {
  if (limit <= 0 || isNaN(limit) || offset < 0 || isNaN(offset)) {
    throw new Error('El límite y el offset deben ser números enteros mayores o iguales a 0.');
  }

  const url = `${this.backendUrl}/api/marvel/comics`;
  return this.http.get<GetComicsResult>(url, {
    params: {
      limit: String(limit), // Convertir a cadena de texto
      offset: String(offset), // Convertir a cadena de texto
    },
  });
}

getSeries(limit: number, offset: number): Observable<GetSeriesResult> {
  if (limit <= 0 || isNaN(limit) || offset < 0 || isNaN(offset)) {
    throw new Error('El límite y el offset deben ser números enteros mayores o iguales a 0.');
  }

  const url = `${this.backendUrl}/api/marvel/series`;
  return this.http.get<GetSeriesResult>(url, {
    params: {
      limit: String(limit), // Convertir a cadena de texto
      offset: String(offset), // Convertir a cadena de texto
    },
  });
}

  //función para obtener un personaje por ID
  getPersonajeById(id: number): Observable<GetCharacterResult> {
    if (isNaN(id) || id <= 0) {
      throw new Error('La ID debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${id}`;
    return this.http.get<GetCharacterResult>(url);
  }

  getCharacterComics(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/comics`;
    return this.http.get<GetExtrasResult>(url);
  }

  getCharacterEvents(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/events`;
    return this.http.get<GetExtrasResult>(url);
  }

  getCharacterSeries(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/series`;
    return this.http.get<GetExtrasResult>(url);
  }

  getCharacterStories(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/stories`;
    return this.http.get<GetExtrasResult>(url);
  }
}