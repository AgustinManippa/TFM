import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    // Configuración del entorno de pruebas
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]  // Declaración del componente a probar
    })
    .compileComponents();

    // Creación del componente y detección de cambios
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba: Comprobar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});