import { Injectable } from '@angular/core';
import { Boss } from '../../models/boss';
import { NativeStorage } from '@ionic-native/native-storage';
///<reference path="../../data/typings.d.ts" />
import bossData from '../../data/bosses.json';

@Injectable()
export class BossProvider {
  bosses: Boss[] = [];

  constructor(
    private storage: NativeStorage
  ) {
    for (let i = 0, c = bossData.length; i < c; i += 1) {
      let boss: Boss = new Boss(bossData[i]);

      // @todo pull 'active' from database or some source
      boss.active = ('base' === boss.source);
      this.bosses.push(boss);
    }
  }

  loadFromDisk() {
    this.storage.getItem('bosses')
      .then(
        data => {
          if (data) {
            this.bosses.forEach(boss => boss.active = -1 !== data.indexOf(boss.id));
          }
        },
        error => console.error(JSON.stringify(error))
      );
  }

  saveToDisk() {
    this.storage.setItem(
      'bosses',
      this.bosses
        .filter(boss => boss.active)
        .map(boss => boss.id)
    ).then(
      () => console.log('saved bosses'),
      error => console.error(error)
    );
  }

  listActiveBosses(): Boss[] {
    return this.bosses.filter(boss => boss.active);
    // let bosses: Boss[] = [];

    // for (let i = 0, c = this.bosses.length; i < c; i += 1) {
    //   if (this.bosses[i].active) {
    //     bosses.push(this.bosses[i]);
    //   }
    // }
    // return bosses;
  }

  listAllBosses(): Boss[] {
    return Object.assign([], this.bosses);
    // let bosses: Boss[] = [];

    // for (let i = 0, c = this.bosses.length; i < c; i += 1) {
    //   bosses.push(this.bosses[i]);
    // }
    // return bosses;
  }
}