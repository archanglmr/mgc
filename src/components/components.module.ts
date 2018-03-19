import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CharacterCardComponent } from './character-card/character-card';
import { CharacterIconComponent } from './character-icon/character-icon';

@NgModule({
	declarations: [
		CharacterCardComponent,
		CharacterIconComponent
	],
	imports: [IonicModule],
	exports: [
		CharacterCardComponent,
		CharacterIconComponent
	]
})
export class ComponentsModule {}
