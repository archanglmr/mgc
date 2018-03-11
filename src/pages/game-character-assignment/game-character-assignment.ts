import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameCharacter } from '../../models/game-character';

/**
 * Generated class for the GameCharacterAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-character-assignment',
  templateUrl: 'game-character-assignment.html',
})
export class GameCharacterAssignmentPage {
  gameCharacters: GameCharacter[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gameCharacters = navParams.data.characters;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameCharacterAssignmentPage');
  }

}
