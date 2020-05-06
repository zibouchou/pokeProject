import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPIServicesService } from '../poke-apiservices.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServicesService] 
})
export class MyComponentComponent implements OnInit {

  id : String;
  selectedPokeId: String;
  searchPokeName =  '';

  pokes : Pokemon[] = [];
  constructor( private pokeAPIService: PokeAPIServicesService ) {
   }

  ngOnInit(): void {
    this.pokeAPIService.getPokemons().subscribe((data) => {

      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon( '' + index, e.name, e.url));

      });
    });
  }

  go(){
    console.log(this.selectedPokeId);
  }

}
