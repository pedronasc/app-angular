import { Component, Input } from '@angular/core';
import { Pokemon } from '../../_model/pokemon';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.sass'
})

export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;
  constructor(){}
}
