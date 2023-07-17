import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ] // Declaración del componente a probar
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent); // Creación del componente
    component = fixture.componentInstance; // Asignación del componente a la variable 'component'
    fixture.detectChanges(); // Detección de cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Prueba de que el componente se ha creado correctamente
  });
});