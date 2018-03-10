import { Injectable } from '@angular/core';

import { Boss } from '../../models/boss';

///<reference path="../../data/typings.d.ts" />
import bossData from '../../data/bosses.json';

/*
  Generated class for the BossProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BossProvider {
  bosses: Boss[] = [];

  constructor() {
    for (let i = 0, c = bossData.length; i < c; i += 1) {
      let boss: Boss = new Boss(bossData[i]);

      // @todo pull 'active' from database or some source
      boss.active = ('base' === boss.source);
      this.bosses.push(boss);
    }
  }

  listActiveBosses(): Boss[] {
    let bosses: Boss[] = [];

    for (let i = 0, c = this.bosses.length; i < c; i += 1) {
      if (this.bosses[i].active) {
        bosses.push(this.bosses[i]);
      }
    }
    return bosses;
  }

  listAllBosses(): Boss[] {
    let bosses: Boss[] = [];

    for (let i = 0, c = this.bosses.length; i < c; i += 1) {
      bosses.push(this.bosses[i]);
    }
    return bosses;
  }
}