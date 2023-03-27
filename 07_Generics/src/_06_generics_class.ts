/* _06_generics_class.ts
-------------------------- 

We can design generic every where needed:
- in class definition
- inside some method
- etc...
*/

// this class is best working with primitives types, not object
class ArrayStorage<T extends string | number | boolean> {
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

//----------------------------------------------------

const textStorage = new ArrayStorage<string>();

textStorage.addItem("Daniel");
textStorage.addItem("toto");
textStorage.removeItem("toto");

textStorage.getItems();

//----------------------------------------------------

const numberStorage = new ArrayStorage<number>();

numberStorage.addItem(10);
numberStorage.getItems();

//----------------------------------------------------

const numberStringStorage = new ArrayStorage<number | string>();

numberStringStorage.addItem(10);
numberStringStorage.addItem("John Doe");
numberStringStorage.getItems();
//----------------------------------------------------

const numberStringStorageBoolean = new ArrayStorage<
  number | string | boolean
>();

numberStringStorageBoolean.addItem(10);
numberStringStorageBoolean.addItem("John Doe");
numberStringStorageBoolean.addItem(true);
numberStringStorageBoolean.getItems();
