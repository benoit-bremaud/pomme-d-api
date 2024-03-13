import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemon: any = null;
  pokemonList: any[] = [];
  selectedPokemon: string[] = [];
  fetchedPokemonDetails: any[] = [];


  constructor(private pokemonService: PokemonService) { }


  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results;
    });
  }

  onCheckboxChange(event: any, pokemonName: string) {
    if(event.target.checked) {
      this.selectedPokemon.push(pokemonName);
    } else {
      this.selectedPokemon = this.selectedPokemon.filter(item => item !== pokemonName);
    }
  }

  // Modify fetchSelectedPokemon() method to store the fetched details
  fetchSelectedPokemon() {
    this.selectedPokemon.forEach(pokemon => {
      this.pokemonService.getPokemon(pokemon).subscribe(data => { // Remove the argument 'pokemonName'
        this.fetchedPokemonDetails.push(data);
      });
    });
  }

}