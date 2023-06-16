import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { CharacterResult, GetCharacterResult } from 'src/app/interfaces/getCharactersResult';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  characters: CharacterResult[] = [];

  formGroup: FormGroup;

  constructor(
      private readonly MarvelService: MarvelService,
      private readonly formBuilder:  FormBuilder
  ) {

      this.formGroup = this.formBuilder.group({
          limit: [0, [Validators.required, Validators.min(0)]],
          // nombre: [ '', [Validators.required]]
      });
  }
  ngOnInit(): void {
      this.cargarPersonajes();
  }

  // cargarPersonajes()
  //  {
  //   if (this.formGroup.valid) {
  //     this.MarvelService
  //         .getPersonajes()
  //         .subscribe((response: any) => {
  //             this.characters = response.results;
  //         });
  // } else {
  //     alert('El formulario no es valido');
  // }
    
  // }

  cargarPersonajes() {
    if (this.formGroup.valid) {
      const limit = this.formGroup.get('limit')?.value || 0; // Obtén el valor del límite del formulario
      this.MarvelService.getPersonajes(limit).subscribe(
        (response: GetCharacterResult) => {
          this.characters = response?.results || [];
        },
      
        (error: any) => {
          console.error(error);
          // Manejar el error dsp
        }
      );
    } else {
      alert('El formulario no es válido');
    }
  }

}
