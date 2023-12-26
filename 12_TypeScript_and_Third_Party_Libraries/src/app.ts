// Code goes here!

import _ from "lodash";
import Product from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3, 4, 5]));

console.log(GLOBAL);

//-----

const book1 = new Product("A book", 19.99);
console.log(book1.getInfos());

//-----

const fetchedProducts = [
  { title: "a product", price: 32.33 },
  { title: "second product", price: 2.45 },
];

const productsFromClass = fetchedProducts.map(
  (product) => new Product(product.title, product.price),
);

console.log("productsFromClass = ", productsFromClass);

for (const product of productsFromClass) {
  console.log(product.getInfos());
}

//------
const productsFromClass_2 = plainToInstance(Product, fetchedProducts);
console.log(productsFromClass_2);
