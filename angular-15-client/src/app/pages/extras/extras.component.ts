import { Component } from '@angular/core';
import { MarvelService } from 'src/app/_services/marvel.service';
import { ExtrasResult, GetExtrasResult} from 'src/app/interfaces/marvel.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent {
  characterId: number = 0;
  errorMessage: string = '';
  comics: ExtrasResult[] = [];
  events: ExtrasResult[] = [];
  series: ExtrasResult[] = [];
  stories: ExtrasResult[] = [];

  constructor(private marvelService: MarvelService) {}

  buscarInformacion() {
    if (isNaN(this.characterId) || this.characterId <= 0) {
      this.errorMessage = 'La ID del personaje debe ser un número entero mayor a 0.';
      this.comics = [];
      this.events = [];
      this.series = [];
      this.stories = [];
      return;
    }

    this.errorMessage = '';
    this.comics = [];
    this.events = [];
    this.series = [];
    this.stories = [];

    Swal.fire({
      title: 'Cargando',
      html: 'Espere un momento...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    this.marvelService.getCharacterComics(this.characterId).subscribe(
      (response: GetExtrasResult) => {
        this.comics = response.results;
        Swal.close(); // Cierra el diálogo de SweetAlert

      },
      (error) => {
        this.errorMessage = 'Error al obtener los comics del personaje.';
        Swal.close(); // Cierra el diálogo de SweetAlert en caso de error

      }
    );

    this.marvelService.getCharacterEvents(this.characterId).subscribe(
      (response: GetExtrasResult) => {
        this.events = response.results;
        Swal.close(); // Cierra el diálogo de SweetAlert

      },
      (error) => {
        this.errorMessage = 'Error al obtener los eventos del personaje.';
        Swal.close(); // Cierra el diálogo de SweetAlert en caso de error

      }
    );

    this.marvelService.getCharacterSeries(this.characterId).subscribe(
      (response: GetExtrasResult) => {
        this.series = response.results;
        Swal.close(); // Cierra el diálogo de SweetAlert

      },
      (error) => {
        this.errorMessage = 'Error al obtener las series del personaje.';
        Swal.close(); // Cierra el diálogo de SweetAlert en caso de error

      }
    );

    this.marvelService.getCharacterStories(this.characterId).subscribe(
      (response: GetExtrasResult) => {
        this.stories = response.results;
        Swal.close(); // Cierra el diálogo de SweetAlert

      },
      (error) => {
        this.errorMessage = 'Error al obtener las historias del personaje.';
        Swal.close(); // Cierra el diálogo de SweetAlert en caso de error

      }
    );
  }
}