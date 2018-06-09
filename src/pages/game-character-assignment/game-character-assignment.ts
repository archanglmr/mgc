import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { GameCharacter } from '../../models/game-character';

@IonicPage()
@Component({
  selector: 'page-game-character-assignment',
  templateUrl: 'game-character-assignment.html',
})
export class GameCharacterAssignmentPage {
  gameCharacters: GameCharacter[] = [];

  constructor(private navParams: NavParams) {
    this.gameCharacters = navParams.data.characters;
  }
}