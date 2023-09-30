import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService{

  pokemons = []

  constructor(private HttpClient: HttpClient) {
    this.carregarPokemons()
   }

  async carregarPokemons() {
    const requisition = await this.HttpClient.get<any>(' https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();

    this.pokemons = requisition.results
    console.log(this.pokemons)
  }
}
