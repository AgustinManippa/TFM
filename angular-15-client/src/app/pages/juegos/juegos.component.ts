import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelService } from 'src/app/_services/marvel.service';
import { GetCharacterResult } from 'src/app/interfaces/get-characters-result.interface';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  characters: any//PokemonResult[] = [];

  formGroup: FormGroup;

  constructor(
      private readonly MarvelService: MarvelService,
      private readonly formBuilder: FormBuilder
  ) {

      this.formGroup = this.formBuilder.group({
          limit: [0, [Validators.required, Validators.min(0)]],
          // nombre: [ '', [Validators.required]]
      });
  }
  ngOnInit(): void {
      this.cargarPersonajes();
  }

  cargarPersonajes()
   {
    console.log("hola trolos")
    
  }

}
