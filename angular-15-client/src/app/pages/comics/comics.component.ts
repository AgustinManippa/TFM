import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { ComicsResult, GetComicsResult } from 'src/app/interfaces/marvel.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent {
  comics: ComicsResult[] = []; // Array para almacenar los cómics cargados
  formGroup: FormGroup; // FormGroup para el formulario de carga de cómics
  comicsPerPage = 50; // Cantidad de cómics por página
  maxComics = 0; // Cantidad máxima de cómics disponibles

  constructor(
    private readonly marvelService: MarvelService, // Servicio para obtener los cómics desde Marvel API
    private readonly formBuilder: FormBuilder // FormBuilder para construir el formulario de carga
  ) {
    // Inicialización del formulario de carga de cómics con validadores
    this.formGroup = this.formBuilder.group({
      offset: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Al iniciar el componente, se obtiene la cantidad máxima de cómics disponibles
    this.marvelService.getComics(1, 0).subscribe(
      (response: GetComicsResult) => {
        this.maxComics = response.total;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
    this.loadComics(); // Cargar los cómics iniciales
  }

  loadComics() {
    if (this.formGroup.valid) {
      const limit = 50;
      const offset = parseInt(this.formGroup.get('offset')?.value, 10) || 0;

      // Borra la lista de cómics existente
      this.comics = [];

      Swal.fire({
        title: 'Cargando',
        html: 'Espere un momento...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      // Llama al servicio para obtener los cómics con el límite y offset especificados
      this.marvelService.getComics(limit, offset).subscribe(
        (response: GetComicsResult) => {
          this.comics = response?.results || []; // Asigna los cómics obtenidos al array
          Swal.close(); // Cierra el diálogo de SweetAlert
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

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.maxComics / this.comicsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  getDisplayedRange(page: number): string {
    const startRange = page * this.comicsPerPage;
    const endRange = Math.min((page + 1) * this.comicsPerPage, this.maxComics);
    return `${startRange}-${endRange}`;
  }
}