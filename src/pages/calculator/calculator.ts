import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Property } from '../../models/property';
import { Boss } from '../../models/boss';

///<reference path="../../data/typings.d.ts" />
import properties from '../../data/properties.json';
import bosses from '../../data/bosses.json';

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
  properties: Property[] = [];
  bosses: Boss[] = [];

  propertyPoints: number = 0;
  bossPoints: number = 0;
  coinPoints: number = 0;
  totalPoints: number = 0;

  propertyCount: number = 0;
  bossCount: number = 0;
  coinCount: number = 0;

  fiveCoins: number = 0;
  oneCoins: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0, c = properties.length; i < c; i += 1) {
      this.properties.push(new Property(properties[i]));
    }
    for (let i = 0, c = bosses.length; i < c; i += 1) {
      this.bosses.push(new Boss(bosses[i]));
    }
  }

  updatePropertyPoints(): void {
    let points = 0,
        count = 0;
    for (let i = 0, c = this.properties.length; i < c; i += 1) {
      let property = this.properties[i];
      if (property.selected) {
        points += property.points;
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
      let boss = this.bosses[i];
      if (boss.selected) {
        points += boss.points;
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
