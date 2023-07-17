import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Configuración de pruebas unitarias utilizando TestBed
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule  // Importa el módulo RouterTestingModule para habilitar las pruebas de enrutamiento
      ],
      declarations: [
        AppComponent  // Declara el componente AppComponent para las pruebas
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Crea una instancia del componente AppComponent para las pruebas
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();  // Comprueba si la instancia del componente se crea correctamente
  });

  it('should render title', () => {
    // Crea una instancia del componente AppComponent para las pruebas
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // Realiza la detección de cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement;
    // Comprueba si el elemento HTML con la clase 'content' contiene el texto especificado
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-15-jwt-auth app is running!');
  });
});