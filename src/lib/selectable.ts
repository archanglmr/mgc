export class Selectable<T> {
  constructor(public item: T, public selected: boolean = false) {}

  static listSelectedItems(list: Selectable<any>[]): any[] {
    let items = [];

    list.forEach(selectable => {
      if (selectable.selected) {
        items.push(selectable.item);
      }
    });

    return items;
  }

  // static selectAll(list: Selectable<any>[]): void {
  //   for (let i = 0, c = list.length; i < c; i += 1) {
  //     list[i].selected = true;
  //   }
  // }

  // static clearAll(list: Selectable<any>[]): void {
  //   for (let i = 0, c = list.length; i < c; i += 1) {
  //     list[i].selected = false;
  //   }
  // }
}