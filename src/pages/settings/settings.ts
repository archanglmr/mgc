import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Selectable } from '../../lib/selectable';

import { GameCharacter } from '../../models/game-character';
import { Boss } from '../../models/boss';

import { GameCharacterProvider } from '../../providers/game-character/game-character';
import { BossProvider } from '../../providers/boss/boss';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  gameCharacters: Selectable<GameCharacter>[] = [];
  bosses: Selectable<Boss>[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private charactersProvider: GameCharacterProvider,
    private bossProvider: BossProvider
  ) {

    this.charactersProvider.listAllCharacters()
      .forEach(character => this.gameCharacters.push(new Selectable(character, character.active)));

    this.bossProvider.listAllBosses()
      .forEach(boss => this.bosses.push(new Selectable(boss, boss.active)));
  }


  updateGameCharacter(character: Selectable<GameCharacter>) {
    character.item.active = character.selected;
  }

  updateBoss(boss: Selectable<Boss>) {
    boss.item.active = boss.selected;
  }
}
