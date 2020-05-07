import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  value: String;
  getValue(): String{
    return this.value;
  }

  setValue(value: String){
    this.value = value;
  }
}
