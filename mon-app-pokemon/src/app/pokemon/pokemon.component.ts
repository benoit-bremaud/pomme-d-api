import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemon: any = null;

  ngOnInit() {
    this.pokemonService.getPokemon('pikachu').subscribe(data => {
      this.pokemon = data;
    }, error => {
      console.error('Error fetching pokemon', error);
    }
    );
  }

  constructor(private pokemonService: PokemonService) { }
}
