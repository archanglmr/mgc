import { Injectable } from '@angular/core';

import { GameCharacter } from '../../models/game-character';

///<reference path="../../data/typings.d.ts" />
import gameCharacterData from '../../data/game-characters.json';

/*
  Generated class for the GameCharacterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameCharacterProvider {
  characters: GameCharacter[] = [];

  constructor() {
    for (let i = 0, c = gameCharacterData.length; i < c; i += 1) {
      let character: GameCharacter = new GameCharacter(gameCharacterData[i]);

      // @todo pull 'active' from database or some source
      character.active = ('base' === character.source);
      this.characters.push(character);
    }
  }

  listActiveCharacters(): GameCharacter[] {
    let characters: GameCharacter[] = [];

    for (let i = 0, c = this.characters.length; i < c; i += 1) {
      if (this.characters[i].active) {
        characters.push(this.characters[i]);
      }
    }
    return characters;
  }

  listAllCharacters(): GameCharacter[] {
    let characters: GameCharacter[] = [];

    for (let i = 0, c = this.characters.length; i < c; i += 1) {
      characters.push(this.characters[i]);
    }
    return characters;
  }

  getCharacter(nameOrId: string): GameCharacter {
    let id = nameOrId.toLowerCase().replace(/ /g, '-');

    for (let i = 0, c = this.characters.length; i < c; i += 1) {
      if (id === this.characters[i].id) {
        return this.characters[i];
      }
    }

    return null;
  }
}
