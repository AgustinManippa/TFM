import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCharacterResult, GetComicsResult, GetExtrasResult, GetSeriesResult } from '../interfaces/marvel.model';

@Injectable()
export class MarvelService {
  private backendUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  // Obtiene los personajes de Marvel
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

  // Obtiene los cómics de Marvel
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

  // Obtiene las series de Marvel
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

  // Obtiene un personaje de Marvel por ID
  getPersonajeById(id: number): Observable<GetCharacterResult> {
    if (isNaN(id) || id <= 0) {
      throw new Error('La ID debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${id}`;
    return this.http.get<GetCharacterResult>(url);
  }

  // Obtiene los cómics de un personaje de Marvel
  getCharacterComics(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/comics`;
    return this.http.get<GetExtrasResult>(url);
  }

  // Obtiene los eventos de un personaje de Marvel
  getCharacterEvents(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/events`;
    return this.http.get<GetExtrasResult>(url);
  }

  // Obtiene las series de un personaje de Marvel
  getCharacterSeries(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/series`;
    return this.http.get<GetExtrasResult>(url);
  }

  // Obtiene las historias de un personaje de Marvel
  getCharacterStories(characterId: number): Observable<GetExtrasResult> {
    if (isNaN(characterId) || characterId <= 0) {
      throw new Error('La ID del personaje debe ser un número entero mayor a 0.');
    }

    const url = `${this.backendUrl}/api/characters/${characterId}/stories`;
    return this.http.get<GetExtrasResult>(url);
  }
}