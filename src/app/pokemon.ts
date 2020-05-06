export interface PokeServiceRes{
    count: number;
    next: String;
    previous: null;
    results: IPokemon[]; 
}

export interface IPokemon{
    name: String;
    url: String;
}


export class Pokemon {
    constructor(public id: String, public name: String, public url: String){}
}
