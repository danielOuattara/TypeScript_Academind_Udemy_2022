export {};

/* _08_generic-type_and_union_type
------------------------------------

-> generic type allow flexibility but at the end, it locks in a type
-> union type allow flexibility and at the end, il allows all the types defined
*/

//---------------------------------------  Generic Type

class ArrayStorage_1<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    console.log([...this.data]);
  }
}

const textStorage8_1 = new ArrayStorage_1<string>();

textStorage8_1.addItem("Daniel");
textStorage8_1.addItem("toto");
textStorage8_1.removeItem("toto");

textStorage8_1.getItems();

//------------------------------------------- Union Type
/* Note 

string[] | number[] | boolean[];

IS NOT  

(string | number | boolean)[]


*/

class ArrayStorage_2 {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    console.log([...this.data]);
  }
}

const textStorage8_2 = new ArrayStorage_2();

textStorage8_2.addItem("Daniel");
textStorage8_2.addItem("toto");
textStorage8_2.removeItem("toto");

textStorage8_2.getItems();
