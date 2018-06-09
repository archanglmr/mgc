import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Selectable } from '../../lib/selectable';
import { Property } from '../../models/property';
import { Boss } from '../../models/boss';
import { GameCharacter } from '../../models/game-character';
import { BossProvider } from '../../providers/boss/boss';
import { PropertyProvider } from '../../providers/property/property';
import { GameCharacterProvider } from '../../providers/game-character/game-character';

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
  peachRent: number = 0;

  propertyCount: number = 0;
  bossCount: number = 0;
  coinCount: number = 0;

  fiveCoins: number = 0;
  oneCoins: number = 0;

  peach: GameCharacter;

  constructor(
    private propertyProvider: PropertyProvider,
    private bossProvider: BossProvider,
    private charactersProvider: GameCharacterProvider
  ) {
    this.propertyProvider.listProperties()
      .forEach(property => {
        this.properties.push(new Selectable(new Property(property)));
      });

    this.peach = this.charactersProvider.getCharacter('princess-peach');
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
        count = 0,
        peachRent = 0,

        monopolies: string[] = [],
        currentColor = '',
        monopoly = false;

    for (let i = 0, c = this.properties.length; i < c; i += 1) {
      let property = this.properties[i].item;

      // Monopoly finder (assums property order is by color)
      if (currentColor !== property.color) {
        if (monopoly) {
          monopolies.push(currentColor);
        }
        currentColor = property.color;
        monopoly = true;
      }


      if (this.properties[i].selected) {
        points += property.points;
        count += 1;
      } else {
        monopoly = false;
      }
    }
    if (monopoly) {
      monopolies.push(currentColor);
    }

    // Peach Calculator
    for (let i = 0, c = this.properties.length; i < c; i += 1) {
      let property = this.properties[i].item;
      if (this.properties[i].selected) {
        if (-1 === monopolies.indexOf(property.color)) {
          peachRent += property.rent;
        } else {
          peachRent += property.monopoly_rent;
        }
      }
    }
    this.propertyPoints = points;
    this.propertyCount = count;
    this.peachRent = peachRent;
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