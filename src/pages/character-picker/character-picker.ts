import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Selectable } from '../../lib/selectable';

import { GameCharacter } from '../../models/game-character';

import { GameCharacterProvider } from '../../providers/game-character/game-character';

/**
 * Generated class for the CharacterPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-picker',
  templateUrl: 'character-picker.html',
})
export class CharacterPickerPage {
  gameCharacters: Selectable<GameCharacter>[] = [];
  playerCount: number = 2;

  selectedCharactersCount: number = 0;
  generateEnabled: boolean = false;

  selectLabel = 'Clear All';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private charactersProvider: GameCharacterProvider
  ) {}

  ionViewWillEnter() {
    // must reload if the provider updated
    let selectionCache: GameCharacter[] = Selectable.listSelectedItems(this.gameCharacters);

    this.gameCharacters = [];
    this.charactersProvider.listActiveCharacters()
      .forEach(character => {
        let selected = true;
        if (selectionCache.length) {
          selected = (-1 !== selectionCache.indexOf(character));
        }
        this.gameCharacters.push(new Selectable(character, selected));
      });
    this.updateGameCharacters();
  }

  updateGameCharacters(): void {
    let count = 0;
    for (let i = 0, c = this.gameCharacters.length; i < c; i += 1) {
      if (this.gameCharacters[i].selected) {
        count += 1;
      }
    }
    this.selectedCharactersCount = count;
    this.updateGenerateButton();
  }

  toggleAll() {
    let selectAll = (this.selectedCharactersCount !== this.gameCharacters.length);

    for (let i = 0, c = this.gameCharacters.length; i < c; i += 1) {
      this.gameCharacters[i].selected = selectAll;
    }
  }

  generate() {
    if (this.generateEnabled) {
      let source: GameCharacter[] = Selectable.listSelectedItems(this.gameCharacters),
        results: GameCharacter[] = [];

      for (let i = 0, c = this.playerCount; i < c; i += 1) {
        results.push(
          source.splice(Math.floor(Math.random() * source.length), 1)[0]
        );
      }

      console.log('RESULTS:');
      results.forEach(character => console.log(` - ${character.name}`));
    }
  }

  private updateGenerateButton() {
    this.generateEnabled = this.selectedCharactersCount >= this.playerCount;
    this.selectLabel = (this.selectedCharactersCount === this.gameCharacters.length) ? 'Clear All' : 'Select All';
  }
}
