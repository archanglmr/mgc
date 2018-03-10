import { IGameCharacter } from '../interfaces/game-character';

export class GameCharacter implements IGameCharacter {
    name: string;
    star_ability: string;
    power_up_scope: string;
    power_up_ability: string;
    source: string;

    active: boolean = false;

    constructor(gameCharacterData: IGameCharacter) {
        for (let key in gameCharacterData) {
            if (gameCharacterData.hasOwnProperty(key)) {
                this[key] = gameCharacterData[key];
            }
        }
    }
}