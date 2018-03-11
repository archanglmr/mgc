import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameCharacterAssignmentPage } from './game-character-assignment';

@NgModule({
  declarations: [
    GameCharacterAssignmentPage,
  ],
  imports: [
    IonicPageModule.forChild(GameCharacterAssignmentPage),
  ],
})
export class GameCharacterAssignmentPageModule {}
