import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeServiceRes, PokeDetail } from './pokemon';


const url = 'https://pokeapi.co/api/v2/pokemon/'

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServicesService {

  constructor( private http: HttpClient ) { }

   getPokemons(): Observable<PokeServiceRes>{
     return this.http.get<PokeServiceRes>(url);
    }

    getPokemonsInfo(id: String): Observable<PokeDetail>{
      return this.http.get<PokeDetail>(url + id + '/');
     }
}
