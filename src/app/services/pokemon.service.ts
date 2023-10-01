import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  todosURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  pokemons: { name: string }[] = []; // Explicitly define the type

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    try {
      const response = await lastValueFrom(this.httpClient.get<any>(this.todosURL));
      this.pokemons = response.results;
      console.log(this.pokemons);
    } catch (error) {
      console.error('Error loading Pokémon:', error);
    }
  }
}