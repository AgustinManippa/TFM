import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminComponent } from './board-admin.component';

describe('BoardAdminComponent', () => {
  let component: BoardAdminComponent;
  let fixture: ComponentFixture<BoardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminComponent ] // Configuración del módulo de pruebas y declaración del componente a probar
    })
    .compileComponents(); // Compila los componentes del módulo de pruebas

    fixture = TestBed.createComponent(BoardAdminComponent); // Crea una instancia del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta los cambios en el componente y actualiza la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que el componente se ha creado correctamente
  });
});