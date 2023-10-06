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

  types: string[] = [];

  @Input()
  poke!: pokemonData;

  @Input()
  pokemon!: string;

  @Input()
  pokemonUrl!: string;

  @Input()
  numero!: number

  @Input()
  photo!:string

  @Input()
  name!:string

  @Input()
  type!:string


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
      types: []
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
          };
          this.numero = res.id
          this.name = res.name
          this.photo = res.sprites.front_default
          this.types = this.extractTypes(res.types)
        },
      }
    )

  }

  private extractTypes(typesData: any[]): string[] {
    // Extrair os tipos de cada objeto no array "typesData"
    return typesData.map((typeObj) => this.type = typeObj.type.name);
  }

}




