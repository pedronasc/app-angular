import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {PokemonCardComponent} from '../pokemon-card/pokemon-card.component'
import {Pokemon} from '../../_model/pokemon'
import {Type} from '../../_model/Type'

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent,
            NgFor
            ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})

export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      imagem: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png',
      number:1 ,
      name: 'Bulbasaur',
      types: [
        Type.Grass,
        Type.Poison
      ]
    },   
    {
      imagem: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png',
      number:2 ,
      name: 'Ivysaur',
      types: [
        Type.Grass,
        Type.Poison
      ]
    },    
    {
      imagem: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png',
      number:3 ,
      name: 'Venusaur',
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      imagem: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png',
      number:4 ,
      name: 'Charmander',
      types: [
        Type.Fire
      ]
    }    
  ];
}



