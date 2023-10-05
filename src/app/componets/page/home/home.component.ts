import { Component, Input } from '@angular/core';
import { PokemonServicesService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(public pokemonsService: PokemonServicesService){

  }

}
