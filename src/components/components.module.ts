import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CharacterCardComponent } from './character-card/character-card';

@NgModule({
	declarations: [CharacterCardComponent],
	imports: [IonicModule],
	exports: [CharacterCardComponent]
})
export class ComponentsModule {}
