import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id : String;
  selectedPokeId: String;
  searchPokeName =  '';

  pokes : Pokemon[] = [];
  constructor() {
    this.pokes.push(new Pokemon('1', 'pikachu'));
    this.pokes.push(new Pokemon('2', 'bulbasaur'));
    this.pokes.push(new Pokemon('3', 'ivysaur'));
    this.pokes.push(new Pokemon('4', 'venusaur'));
    this.pokes.push(new Pokemon('5', 'charmender'));

   }

  ngOnInit(): void {
  }

  go(){
    console.log(this.selectedPokeId);
  }

}
