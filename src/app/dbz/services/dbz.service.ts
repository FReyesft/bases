import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as id } from 'uuid'
@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: id(),
      name: 'Goku',
      power: 9500
    }, {
      id: id(),
      name: 'Vegeta',
      power: 7000
    }, {
      id: id(),
      name: 'Trunks',
      power: 8000
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: id(), ...character }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    console.log(id)
    this.characters = this.characters.filter(character => character.id != id)
  }

  constructor() { }

}