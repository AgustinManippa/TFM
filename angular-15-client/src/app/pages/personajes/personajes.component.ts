import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { CharacterResult, GetCharacterResult } from 'src/app/interfaces/marvel.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  characters: CharacterResult[] = []; // Arreglo para almacenar los personajes
  formGroup: FormGroup; // Formulario para el offset de paginación
  charactersPerPage = 50; // Cantidad de personajes por página
  maxCharacters = 0; // Número total de personajes

  constructor(
    private readonly marvelService: MarvelService, // Servicio para obtener los personajes de Marvel
    private readonly formBuilder: FormBuilder // Constructor del formulario
  ) {
    // Inicializa el formulario y define las validaciones
    this.formGroup = this.formBuilder.group({
      offset: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Obtiene el número total de personajes al iniciar el componente
    this.marvelService.getPersonajes(1, 0).subscribe(
      (response: GetCharacterResult) => {
        this.maxCharacters = response.total;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
    this.cargarPersonajes(); // Carga los personajes iniciales
  }

  cargarPersonajes() {
    if (this.formGroup.valid) {
      const limit = 50;
      let offset = parseInt(this.formGroup.get('offset')?.value, 10) || 0;

      // Borra la lista de personajes existente
      this.characters = [];

      // Muestra un diálogo de carga utilizando SweetAlert
      Swal.fire({
        title: 'Cargando',
        html: 'Espere un momento...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      // Obtiene los personajes de la API de Marvel
      this.marvelService.getPersonajes(limit, offset).subscribe(
        (response: GetCharacterResult) => {
          this.characters = response?.results || [];
          Swal.close(); // Cierra el diálogo de SweetAlert una vez que se obtienen los personajes
        },
        (error: any) => {
          console.error(error);
          // Manejar el error aquí
          Swal.close(); // Cierra el diálogo de SweetAlert en caso de error
        }
      );
    } else {
      alert('El formulario no es válido');
    }
  }

  // Retorna un arreglo de números que representa las páginas disponibles
  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.maxCharacters / this.charactersPerPage);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  // Retorna el rango de personajes que se muestra en la página actual
  getDisplayedRange(page: number): string {
    const startRange = page * this.charactersPerPage;
    const endRange = Math.min((page + 1) * this.charactersPerPage, this.maxCharacters);
    return `${startRange}-${endRange}`;
  }
}