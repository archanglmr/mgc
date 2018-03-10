import { IBoss } from '../interfaces/boss';

export class Boss implements IBoss {
    level: number;
    name: string;
    cost: number;
    payTo: string;
    goal: number;
    rules: string;
    prize: string;
    points: number;

    selected: boolean = false;

    constructor(bossData: IBoss) {
        for (let key in bossData) {
            if (bossData.hasOwnProperty(key)) {
                this[key] = bossData[key];
            }
        }
    }
}