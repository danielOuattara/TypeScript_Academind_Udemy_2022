//--------------------------------------------------------------
//
class Product {
  private isListed: boolean;

  constructor(public title: string, public price: number) {
    this.isListed = true;
  }

  describe() {
    console.log(this.isListed);
  }
}

const product1 = new Product("television", 1200);
console.log("product1 :", product1);
