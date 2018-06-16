import { Injectable } from '@angular/core';
import { GameCharacter } from '../../models/game-character';
import { NativeStorage } from '@ionic-native/native-storage';
///<reference path="../../data/typings.d.ts" />
import gameCharacterData from '../../data/game-characters.json';

@Injectable()
export class GameCharacterProvider {
  characters: GameCharacter[] = [];

  constructor(private storage: NativeStorage) {
    for (let i = 0, c = gameCharacterData.length; i < c; i += 1) {
      let character: GameCharacter = new GameCharacter(gameCharacterData[i]);

      character.active = ('base' === character.source);
      this.characters.push(character);
    }
  }

  loadFromDisk() {
    console.log('going to load characters:');
    this.storage.getItem('characters')
      .then(
        data => {
          console.log('load characters:', JSON.stringify(data));
          if (data) {
            this.characters.forEach(character => character.active = -1 !== data.indexOf(character.id));
          }
        },
        error => console.error(JSON.stringify(error))
      );
  }

  saveToDisk() {
    let characters = this.characters
      .filter(character => character.active)
      .map(character => character.id);
    console.log('save characters:', JSON.stringify(characters));

    this.storage
      .setItem('characters', characters)
      .then(
        () => console.log('saved characters'),
        error => console.error(error)
      );
  }

  listActiveCharacters(): GameCharacter[] {
    return this.characters.filter(character => character.active);
  }

  listAllCharacters(): GameCharacter[] {
    return Object.assign([], this.characters);
  }

  getCharacter(nameOrId: string): GameCharacter {
    let id = nameOrId.toLowerCase().replace(/ /g, '-');
    let character = this.characters.filter(character => id === character.id);
    return character.length ? character[0] : null;
  }
}