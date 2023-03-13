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
