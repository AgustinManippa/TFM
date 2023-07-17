import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas
    service = TestBed.inject(UserService); // Obtener una instancia del servicio a probar
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Comprobar que el servicio se ha creado correctamente
  });
});