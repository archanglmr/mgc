import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharacterPickerPage } from '../character-picker/character-picker';
import { CalculatorPage } from '../calculator/calculator';
import { SettingsPage } from '../settings/settings';

import { GameCharacterProvider } from '../../providers/game-character/game-character';
import { BossProvider } from '../../providers/boss/boss';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = CharacterPickerPage;
  tab3Root = CalculatorPage;
  tab4Root = SettingsPage;

  constructor(
    private platform: Platform,
    private charactersProvider: GameCharacterProvider,
    private bossProvider: BossProvider
  ) {}

  ionViewWillLoad() {
    this.platform.ready().then(() => {
      this.charactersProvider.loadFromDisk();
      this.bossProvider.loadFromDisk();
    });
  }
}