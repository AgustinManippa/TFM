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
      offset: [0, [Validators.required, Validators.min(0)]],
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
      const limit = 50;
      const offset = parseInt(this.formGroup.get('offset')?.value, 10) || 0;

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
    const startRange = page * this.comicsPerPage;
    const endRange = Math.min((page + 1) * this.comicsPerPage, this.maxComics);
    return `${startRange}-${endRange}`;
  }
}