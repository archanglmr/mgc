import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameCharacter } from '../../models/game-character';
import { GameCharacterProvider } from '../../providers/game-character/game-character';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gameCharacters: GameCharacter[] = [];

  constructor(
    public navCtrl: NavController,
    private charactersProvider: GameCharacterProvider) {
  }

  ionViewDidLoad() {
    this.gameCharacters = this.charactersProvider.listActiveCharacters();
  }

  ionViewWillEnter() {
    this.gameCharacters = this.charactersProvider.listActiveCharacters();
  }
}