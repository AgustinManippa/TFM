import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserComponent } from './board-user.component';

describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;

  beforeEach(async () => {
    // Configuración del entorno de pruebas para el componente BoardUserComponent
    await TestBed.configureTestingModule({
      declarations: [ BoardUserComponent ] // Declaración del componente a probar
    })
    .compileComponents(); // Compilación del componente y sus plantillas

    fixture = TestBed.createComponent(BoardUserComponent); // Creación del componente dentro del fixture
    component = fixture.componentInstance; // Obtener una instancia del componente a probar
    fixture.detectChanges(); // Detectar los cambios iniciales en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Comprobar que el componente se ha creado correctamente
  });
});