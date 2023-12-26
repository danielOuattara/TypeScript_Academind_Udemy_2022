export default class Product {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.price = price;
    this.title = title;
  }

  getInfos() {
    return [this.title, `${this.price}`];
  }
}
