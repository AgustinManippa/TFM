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
  characterId: number = 0; // ID del personaje a buscar
  character: CharacterResult | null = null; // Almacena los datos del personaje encontrado
  errorMessage: string | null = null; // Mensaje de error en caso de falla

  constructor(private marvelService: MarvelService) {}

  buscarPersonaje() {
    this.character = null; // Reinicia los datos del personaje
    this.errorMessage = null; // Reinicia el mensaje de error

    // Muestra un diálogo de carga utilizando SweetAlert2
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
      // Valida si la ID del personaje es válida
      this.errorMessage = 'La ID debe ser un número entero mayor a 0.';
      Swal.close(); // Cierra el diálogo de SweetAlert en caso de error
      return;
    }

    this.marvelService.getPersonajeById(this.characterId).subscribe(
      (response: GetCharacterResult) => {
        if (response) {
          this.character = response.results[0]; // Almacena los datos del primer personaje encontrado
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
    return `${thumbnail.path}.${thumbnail.extension}`; // Genera la URL de la imagen del personaje
  }
}