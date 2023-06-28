import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { CharacterResult, GetCharacterResult } from 'src/app/interfaces/marvel.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  characters: CharacterResult[] = [];
  formGroup: FormGroup;
  charactersPerPage = 50;
  maxCharacters = 0;

  constructor(
    private readonly marvelService: MarvelService,
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      limit: [this.charactersPerPage, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.marvelService.getPersonajes(1, 0).subscribe(
      (response: GetCharacterResult) => {
        this.maxCharacters = response.total;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    if (this.formGroup.valid) {
      const limit = parseInt(this.formGroup.get('limit')?.value, 10) || 1;
      const offset = limit-49;

      console.log(offset)
          
      // Borra la lista de personajes existente
      this.characters = [];
    
      this.marvelService.getPersonajes(limit, offset).subscribe(
        (response: GetCharacterResult) => {
          this.characters = response?.results || [];
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
    const totalPages = Math.ceil(this.maxCharacters / this.charactersPerPage);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  getDisplayedRange(page: number): string {
    const startRange = page * this.charactersPerPage + 1;
    const endRange = Math.min((page + 1) * this.charactersPerPage, this.maxCharacters);
    return `${startRange}-${endRange}`;
  }
}