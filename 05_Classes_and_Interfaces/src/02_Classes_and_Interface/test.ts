export {};

export interface Item {
  id: string;
  item: string;
  check: boolean;
}

// export class ListItem implements Item {
//   constructor(
//     private id: string,
//     private item: string,
//     private check: boolean,
//   ) {}

//   public get data(): (string | boolean)[] {
//     return [this.id, this.item, this.check];
//   }

//   public set data(value: { id: string; item: string; check: boolean }) {
//     this.id = value.id;
//     this.item = value.item;
//     this.check = value.check;
//   }
// }

// const list = new ListItem("123", "firstList", true);
// console.log(list);

//================================================================

class ListItem {
  private _id: string;
  private _item: string;
  private _check: boolean;

  constructor(id: string, item: string, check: boolean) {
    this._id = id;
    this._item = item;
    this._check = check;
  }

  public get data(): (string | boolean)[] {
    return [this._id, this._item, this._check];
  }

  // public set data(value: { id: string; item: string; check: boolean }) {
  //   this.id = value.id;
  //   this.item = value.item;
  //   this.check = value.check;
  // }
}

const list = new ListItem("123", "firstList", true);
console.log(list);
