import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  pokemon!: string;

  @Input()
  numero!: number;

  pegarImagemPokemon(){
    const numeroFormatodo = this.numero;
    
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numeroFormatodo}.svg`;
  }

  constructor(){}
  
  ngOnInit():void{

  }

}




