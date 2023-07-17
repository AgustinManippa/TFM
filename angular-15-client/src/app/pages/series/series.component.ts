import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { GetSeriesResult, SeriesResult, Image } from 'src/app/interfaces/marvel.model';
import Swal from 'sweetalert2';

// Interfaz extendida de SeriesResult para agregar la propiedad showImage
interface SeriesResultWithImage extends SeriesResult {
  showImage: boolean; // Indica si se debe mostrar la imagen de la serie
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
  series: SeriesResultWithImage[] = []; // Lista de series con la propiedad showImage
  formGroup: FormGroup; // Grupo de formulario para el offset
  seriesPerPage = 50; // Cantidad de series por página
  maxSeries = 0; // Total de series disponibles

  constructor(
    private readonly marvelService: MarvelService,
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      offset: [0, [Validators.required, Validators.min(0)]], // Control del offset con validadores
    });
  }

  ngOnInit(): void {
    // Obtener el total de series disponibles
    this.marvelService.getSeries(1, 0).subscribe(
      (response: GetSeriesResult) => {
        this.maxSeries = response.total;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
    this.cargarSeries(); // Cargar las series iniciales
  }

  cargarSeries() {
    if (this.formGroup.valid) {
      const limit = 50;
      const offset = parseInt(this.formGroup.get('offset')?.value, 10) || 0;

      // Borra la lista de series existente
      this.series = [];

      Swal.fire({
        title: 'Cargando',
        html: 'Espere un momento...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      this.marvelService.getSeries(limit, offset).subscribe(
        (response: GetSeriesResult) => {
          // Mapear las series y agregar la propiedad showImage
          this.series = response?.results?.map((serie: SeriesResult) => ({
            ...serie,
            showImage: false // Valor predeterminado para no mostrar la imagen
          })) || [];
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
    const totalPages = Math.ceil(this.maxSeries / this.seriesPerPage);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  getDisplayedRange(page: number): string {
    const startRange = page * this.seriesPerPage;
    const endRange = Math.min((page + 1) * this.seriesPerPage, this.maxSeries);
    return `${startRange}-${endRange}`;
  }

  mostrarImagen(serie: SeriesResultWithImage) {
    serie.showImage = true; // Mostrar la imagen de la serie
  }

  getSeriesImageUrl(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`; // Obtener la URL de la imagen de la serie
  }
}