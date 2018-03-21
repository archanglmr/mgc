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

  selectLabel = 'Clear All';
  private selectAll = false;

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
    this.updateCharacterSelectAllButton();
  }

  updateBoss(boss: Selectable<Boss>) {
    boss.item.active = boss.selected;
  }

  toggleAll() {
    for (let i = 0, c = this.gameCharacters.length; i < c; i += 1) {
      this.gameCharacters[i].selected = this.selectAll;
    }
    this.updateCharacterSelectAllButton();
  }

  private updateCharacterSelectAllButton() {
    let selectAll = false;
    for (let i = 0, c = this.gameCharacters.length; i < c; i += 1) {
      if (!this.gameCharacters[i].selected) {
        selectAll = true;
        break;
      }
    }
    this.selectAll = selectAll;
    this.selectLabel = this.selectAll ? 'Select All' : 'Clear All';
  }
}
