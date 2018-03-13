import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Selectable } from '../../lib/selectable';

import { Property } from '../../models/property';
import { Boss } from '../../models/boss';

import { BossProvider } from '../../providers/boss/boss';
import { PropertyProvider } from '../../providers/property/property';


/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  properties: Selectable<Property>[] = [];
  bosses: Selectable<Boss>[] = [];

  propertyPoints: number = 0;
  bossPoints: number = 0;
  coinPoints: number = 0;
  totalPoints: number = 0;

  propertyCount: number = 0;
  bossCount: number = 0;
  coinCount: number = 0;

  fiveCoins: number = 0;
  oneCoins: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private propertyProvider: PropertyProvider,
    private bossProvider: BossProvider
  ) {
    this.propertyProvider.listProperties()
      .forEach(property => {
        this.properties.push(new Selectable(new Property(property)));
      });
  }

  ionViewWillEnter() {
    // must reload if the provider updated
    let selectionCache: Boss[] = Selectable.listSelectedItems(this.bosses);

    this.bosses = [];
    this.bossProvider.listActiveBosses()
      .forEach(boss => {
        let selected = false;
        if (selectionCache.length) {
          selected = (-1 !== selectionCache.indexOf(boss));
        }
        this.bosses.push(new Selectable(boss, selected));
      });

    this.updatePropertyPoints();
    this.updateBossPoints();
    this.updateCoinPoints();
  }

  updatePropertyPoints(): void {
    let points = 0,
        count = 0;
    for (let i = 0, c = this.properties.length; i < c; i += 1) {
      if (this.properties[i].selected) {
        points += this.properties[i].item.points;
        count += 1;
      }
    }
    this.propertyPoints = points;
    this.propertyCount = count;
    this.updateTotalPoints();
  }

  updateBossPoints(): void {
    let points = 0,
        count = 0;
    for (let i = 0, c = this.bosses.length; i < c; i += 1) {
      if (this.bosses[i].selected) {
        points += this.bosses[i].item.points;
        count += 1;
      }
    }
    this.bossPoints = points;
    this.bossCount = count;
    this.updateTotalPoints();
  }

  updateCoinPoints(): void {
    let points = 0,
        count = 0;

    points += this.fiveCoins * 10;
    count += this.fiveCoins * 5;
    if (this.oneCoins) {
      points += Math.floor(this.oneCoins / 5) * 10;
      count += this.oneCoins;
    }

    this.coinPoints = points;
    this.coinCount = count;
    this.updateTotalPoints();
  }

  updateTotalPoints(): void {
    this.totalPoints = this.propertyPoints + this.bossPoints + this.coinPoints;
  }

  reset(): void {
    for (let i = 0, c = this.properties.length; i < c; i += 1) {
      this.properties[i].selected = false;
    }
    for (let i = 0, c = this.bosses.length; i < c; i += 1) {
      this.bosses[i].selected = false;
    }
    this.fiveCoins = 0;
    this.oneCoins = 0;
  }
}
