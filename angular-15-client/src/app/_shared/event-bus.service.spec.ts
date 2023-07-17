import { TestBed } from '@angular/core/testing';

import { EventBusService } from './event-bus.service';

describe('EventBusService', () => {
  let service: EventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas
    service = TestBed.inject(EventBusService); // Obtener una instancia del servicio a probar
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Comprobar que el servicio se ha creado correctamente
  });
});