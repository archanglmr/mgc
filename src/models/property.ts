import { IProperty } from '../interfaces/property';

export class Property implements IProperty {
  color: string;
  name: string;
  cost: number;
  rent: number;
  monopoly_rent: number;
  points: number;

  constructor(propertyData: IProperty) {
    for (let key in propertyData) {
      if (propertyData.hasOwnProperty(key)) {
        this[key] = propertyData[key];
      }
    }
  }
}