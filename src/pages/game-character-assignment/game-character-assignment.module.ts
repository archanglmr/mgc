import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameCharacterAssignmentPage } from './game-character-assignment';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GameCharacterAssignmentPage,
  ],
  imports: [
    IonicPageModule.forChild(GameCharacterAssignmentPage),
    ComponentsModule
  ],
})
export class GameCharacterAssignmentPageModule {}
