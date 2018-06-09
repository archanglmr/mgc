import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterPickerPage } from './character-picker';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CharacterPickerPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CharacterPickerPage)
  ]
})
export class CharacterPickerPageModule {}