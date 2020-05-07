import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeDetail } from '../pokemon';
import { PokeAPIServicesService } from '../poke-apiservices.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServicesService, PokeShareInfoService] 
})
export class MyComponentComponent implements OnInit {

  id : String;
  selectedPokeId: String;
  searchPokeName =  '';
  pokeDetail: PokeDetail;

  pokes : Pokemon[] = [];
  constructor( private pokeAPIService: PokeAPIServicesService, private pokeShareService: PokeShareInfoService ) {
   }

  ngOnInit(): void {
    this.pokeAPIService.getPokemons().subscribe((data) => {

      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon( '' + index, e.name, e.url));

      });
    });
  }

  go(){

    this.pokeShareService.setValue(this.selectedPokeId);
    if (this.selectedPokeId != ''){
      this.pokeAPIService.getPokemonsInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
    }

  }

}
