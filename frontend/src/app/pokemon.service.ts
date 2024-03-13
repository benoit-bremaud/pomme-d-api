import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return this.http.get(apiUrl);
  }

  getPokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
    return this.http.get(apiUrl);
  }
}
