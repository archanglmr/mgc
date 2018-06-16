import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
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
    private platform: Platform,
    public navCtrl: NavController,
    private charactersProvider: GameCharacterProvider
  ) {}

  ionViewWillEnter() {
    this.platform.ready().then(() => {
      this.gameCharacters = this.charactersProvider.listActiveCharacters();
    });
  }

  ionViewDidLoad() {
    this.gameCharacters = this.charactersProvider.listActiveCharacters();
  }
}