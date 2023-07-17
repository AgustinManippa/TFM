import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventData } from './event.class';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject<EventData>();

  // Emitir un evento
  emit(event: EventData) {
    this.subject$.next(event);
  }

  // Suscribirse a un evento y ejecutar una acción cuando se emite
  on(eventName: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EventData) => e.name === eventName), // Filtrar los eventos por nombre
      map((e: EventData) => e["value"]) // Mapear los eventos al valor asociado
    ).subscribe(action); // Suscribirse y ejecutar la acción cuando se emite el evento
  }
}