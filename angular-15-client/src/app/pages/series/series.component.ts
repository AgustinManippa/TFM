import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { GetSeriesResult, SeriesResult, Image } from 'src/app/interfaces/marvel.model';

interface SeriesResultWithImage extends SeriesResult {
  showImage: boolean;
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
  series: SeriesResultWithImage[] = [];
  formGroup: FormGroup;
  seriesPerPage = 50;
  maxSeries = 0;

  constructor(
    private readonly marvelService: MarvelService,
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      offset: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.marvelService.getSeries(1, 0).subscribe(
      (response: GetSeriesResult) => {
        this.maxSeries = response.total;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
    this.cargarSeries();
  }

  cargarSeries() {
    if (this.formGroup.valid) {
      const limit = 50;
      const offset = parseInt(this.formGroup.get('offset')?.value, 10) || 0;

      // Borra la lista de series existente
      this.series = [];

      this.marvelService.getSeries(limit, offset).subscribe(
        (response: GetSeriesResult) => {
          this.series = response?.results?.map((serie: SeriesResult) => ({
            ...serie,
            showImage: false
          })) || [];
        },
        (error: any) => {
          console.error(error);
          // Manejar el error aquí
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
    serie.showImage = true;
  }

  getSeriesImageUrl(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
}