import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModeratorComponent } from './board-moderator.component';

describe('BoardModeratorComponent', () => {
  let component: BoardModeratorComponent;
  let fixture: ComponentFixture<BoardModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardModeratorComponent ] // Declaraciones de componentes necesarios para el componente a probar
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardModeratorComponent); // Creación del componente a probar
    component = fixture.componentInstance; // Obtener una instancia del componente
    fixture.detectChanges(); // Ejecutar la detección de cambios del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Comprobar que el componente se ha creado correctamente
  });
});