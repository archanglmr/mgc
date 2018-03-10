import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CharacterPickerPage } from '../character-picker/character-picker';
import { CalculatorPage } from '../calculator/calculator';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CharacterPickerPage;
  tab3Root = CalculatorPage;
  tab4Root = SettingsPage;

  constructor() {}
}
