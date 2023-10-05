import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonServicesService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input()
  poke!: pokemonData;

  @Input()
  pokemon!: string;

  @Input()
  pokemonUrl!: string;

  @Input()
  numero!: number;

  @Input()
  detail!: {
    type: string,
  }[];

  pegarImagemPokemon(){
    const numeroFormatodo = this.numero;
    
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numeroFormatodo}.svg`;
  }

  adicionaZero(){
    const n = this.numero
    return ("0000" + n).slice(-3)
  }

  constructor(
    public service: PokemonServicesService
  ){
    this.poke ={
      id: 0,
      name:'',
      sprites: {
        front_default:''
      },
      types:{
        type:''
      }
    }
   }
  
  ngOnInit():void{

    this.service.getPokemons(this.pokemon).subscribe(
      {
        next: (res) =>{

          this.poke = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          console.log(res.id)
          console.log(res.name)
          console.log(res.sprites.front_default)
          console.log(res.types)
        },
      }
    )

  }

}




