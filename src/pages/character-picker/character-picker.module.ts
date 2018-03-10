import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterPickerPage } from './character-picker';

@NgModule({
  declarations: [
    CharacterPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterPickerPage),
  ],
})
export class CharacterPickerPageModule {}
