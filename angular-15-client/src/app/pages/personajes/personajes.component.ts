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
          limit: [1, [Validators.required, Validators.min(1)]],
          // nombre: [ '', [Validators.required]]
      });
  }
  ngOnInit(): void {
      this.cargarPersonajes();
  }

  cargarPersonajes() {
    if (this.formGroup.valid) {
      const limit = parseInt(this.formGroup.get('limit')?.value, 10) || 1;
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
