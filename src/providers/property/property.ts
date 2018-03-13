import { Injectable } from '@angular/core';

import { Property } from '../../models/property';

///<reference path="../../data/typings.d.ts" />
import propertyData from '../../data/properties.json';

/*
  Generated class for the PropertyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertyProvider {
  properties: Property[] = [];

  constructor() {
    for (let i = 0, c = propertyData.length; i < c; i += 1) {
      this.properties.push(new Property(propertyData[i]));
    }
  }

  listProperties(): Property[] {
    let properties: Property[] = [];

    for (let i = 0, c = this.properties.length; i < c; i += 1) {
      properties.push(this.properties[i]);
    }
    return properties;
  }
}
