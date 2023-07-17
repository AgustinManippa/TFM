import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ] // Declara el componente HomeComponent para las pruebas
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent); // Crea una instancia del componente HomeComponent
    component = fixture.componentInstance; // Obtiene la instancia del componente HomeComponent
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica si el componente se ha creado exitosamente
  });
});