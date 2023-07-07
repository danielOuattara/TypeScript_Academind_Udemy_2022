export {};

/* Objects Type 
=================*/

// best way
const person = {
  name: "Daniel",
  age: 38,
};

console.log("person = ", person);

// console.log(person.lastName);  // Error
// Incorrect, TypeScript knows that there is no property called lastName in person object

// autocompletion OK using the dot

// Any object has an object type

/*
const person = {
  name: string,
  age: number,
};

*/

// Below is restrictive: No auto completion
const person2: object = {
  name: "Daniel",
  age: 38,
};
console.log("person2 = ", person2);

// Below is restrictive, as above: No auto completion
const person3: {} = {
  name: "Daniel",
  age: 38,
};

// console.log(person3.);

// Below is not restrictive, as above
const person4: {
  name: string;
  age: number;
} = {
  name: "Daniel",
  age: 38,
};

console.log("person4.age = ", person4.age);
// Auto completion: available

/* ----------------------
// Nested Objects & Types */

// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:

const product_javascript = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log("product_javascript = ", product_javascript);

// Its TypeScript type is:
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log("product = ", product);

// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }

// So you have an object type in an object type so to say.
