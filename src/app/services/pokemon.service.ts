import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, catchError, lastValueFrom } from 'rxjs';
import { throwError } from 'rxjs';
import { pokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  todosURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  pokemons: { name: string, url: string }[] = []; // Explicitly define the type

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async carregarPokemons() {
    try {
      const response = await lastValueFrom(this.httpClient.get<any>(this.todosURL));
      this.pokemons = response.results;
    } catch (error) {
      console.error('Error loading Pokémon:', error);
    }
  }

  // 
  // 

  public baseURL: string = ""

  public pokeData: pokemonData | any


  getPokemons(pokemonName: string):Observable<pokemonData>{
    this. pokeData = this.httpClient.get<pokemonData>(`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }

// 
// 
}
