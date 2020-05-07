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

export interface PokeDetail {
    abilities:              Ability[];
    baseExperience:         number;
    forms:                  Species[];
    gameIndices:            GameIndex[];
    height:                 number;
    heldItems:              any[];
    id:                     number;
    isDefault:              boolean;
    locationAreaEncounters: string;
    moves:                  Move[];
    name:                   string;
    order:                  number;
    species:                Species;
    sprites:                Sprites;
    stats:                  Stat[];
    types:                  Type[];
    weight:                 number;
}

export interface Ability {
    ability:  Species;
    isHidden: boolean;
    slot:     number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface GameIndex {
    gameIndex: number;
    version:   Species;
}

export interface Move {
    move:                Species;
    versionGroupDetails: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    levelLearnedAt:  number;
    moveLearnMethod: Species;
    versionGroup:    Species;
}

export interface Sprites {
    backDefault:      string;
    backFemale:       null;
    backShiny:        string;
    backShinyFemale:  null;
    frontDefault:     string;
    frontFemale:      null;
    frontShiny:       string;
    frontShinyFemale: null;
}

export interface Stat {
    baseStat: number;
    effort:   number;
    stat:     Species;
}

export interface Type {
    slot: number;
    type: Species;
}



export class Pokemon {
    constructor(public id: String, public name: String, public url: String){}
}
