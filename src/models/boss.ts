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
  source: string;

  active: boolean = false;
  id: string = null;

  constructor(bossData: IBoss) {
    for (let key in bossData) {
      if (bossData.hasOwnProperty(key)) {
        this[key] = bossData[key];
      }
    }
    this.id = this.name.toLowerCase().replace(/\./g, '').replace(/ /g, '-');
  }
}