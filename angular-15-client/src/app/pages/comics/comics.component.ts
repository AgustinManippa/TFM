import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { ComicsResult, GetComicsResult } from 'src/app/interfaces/marvel.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent {
  comics: ComicsResult[] = [];
  formGroup: FormGroup;
  comicsPerPage = 50;
  maxComics = 0;

  constructor(
    private readonly marvelService: MarvelService,
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      limit: [this.comicsPerPage, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.marvelService.getComics(1, 0).subscribe(
      (response: GetComicsResult) => {
        this.maxComics = response.total;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
    this.loadComics();
  }

  loadComics() {
    if (this.formGroup.valid) {
      const limit = parseInt(this.formGroup.get('limit')?.value, 10) || 1;
      const offset = limit - 49;

      // Borra la lista de comics existente
      this.comics = [];

      this.marvelService.getComics(limit, offset).subscribe(
        (response: GetComicsResult) => {
          this.comics = response?.results || [];
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
    const totalPages = Math.ceil(this.maxComics / this.comicsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  getDisplayedRange(page: number): string {
    const startRange = page * this.comicsPerPage + 1;
    const endRange = Math.min((page + 1) * this.comicsPerPage, this.maxComics);
    return `${startRange}-${endRange}`;
  }
}