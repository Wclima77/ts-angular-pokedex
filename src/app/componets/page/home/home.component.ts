import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  pokemons = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander"
  ];

  id!: number;

  buscaTodosPokemons(){

    const idrecebido = this.id;
    
    return `https://pokeapi.co/api/v2/pokemon/${idrecebido}.svg`;
  }

}
