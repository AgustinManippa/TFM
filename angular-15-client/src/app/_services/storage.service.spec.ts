import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas
    service = TestBed.inject(StorageService); // Obtener una instancia del servicio a probar
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Comprobar que el servicio se ha creado correctamente
  });
});