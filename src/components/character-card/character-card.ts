import { Component, Input } from '@angular/core';
import { GameCharacter } from '../../models/game-character';

/**
 * Generated class for the CharacterCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'character-card',
  templateUrl: 'character-card.html'
})
export class CharacterCardComponent {
  @Input() character: GameCharacter;
}
