import { Component } from '@angular/core';
import { MarvelService } from 'src/app/_services/marvel.service';
import { CharacterResult, GetCharacterResult, Image } from 'src/app/interfaces/marvel.model';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Cargando',
      html: 'Espere un momento...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  
    if (!this.characterId || isNaN(this.characterId) || this.characterId <= 0) {
      this.errorMessage = 'La ID debe ser un número entero mayor a 0.';
      Swal.close(); // Cierra el diálogo de SweetAlert en caso de error
      return;
    }
  
    this.marvelService.getPersonajeById(this.characterId).subscribe(
      (response: GetCharacterResult) => {
        if (response) {
          this.character = response.results[0];
          Swal.close(); // Cierra el diálogo de SweetAlert
        } else {
          this.errorMessage = 'No se encontró ningún personaje con esa ID.';
          Swal.close(); // Cierra el diálogo de SweetAlert en caso de error

        }
      },
      (error) => {
        this.errorMessage = 'Error al obtener el personaje.';
        Swal.close(); // Cierra el diálogo de SweetAlert en caso de error

      }
    );
  }

  getCharacterImageUrl(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
}
