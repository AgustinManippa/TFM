import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas
    service = TestBed.inject(AuthService); // Obtener una instancia del servicio a probar
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Comprobar que el servicio se ha creado correctamente
  });
});