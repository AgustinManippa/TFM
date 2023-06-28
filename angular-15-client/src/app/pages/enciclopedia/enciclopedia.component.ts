import { Component } from '@angular/core';
import { MarvelService } from 'src/app/_services/marvel.service';
import { CharacterResult, GetCharacterResult, Image } from 'src/app/interfaces/marvel.model';

@Component({
  selector: 'app-enciclopedia',
  templateUrl: './enciclopedia.component.html',
  styleUrls: ['./enciclopedia.component.css']
})
export class EnciclopediaComponent {
  characterId: number = 0;
  character: CharacterResult | null = null;
  errorMessage: string | null = null;

  constructor(private marvelService: MarvelService) {}

  buscarPersonaje() {
    this.character = null;
    this.errorMessage = null;
  
    if (!this.characterId || isNaN(this.characterId) || this.characterId <= 0) {
      this.errorMessage = 'La ID debe ser un número entero mayor a 0.';
      return;
    }
  
    this.marvelService.getPersonajeById(this.characterId).subscribe(
      (response: GetCharacterResult) => {
        if (response) {
          console.log(response)
          this.character = response.results[0];
        } else {
          this.errorMessage = 'No se encontró ningún personaje con esa ID.';
        }
      },
      (error) => {
        this.errorMessage = 'Error al obtener el personaje.';
      }
    );
  }

  getCharacterImageUrl(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
}
