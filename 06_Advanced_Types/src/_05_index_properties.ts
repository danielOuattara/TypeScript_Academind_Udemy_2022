console.log("-----------");

/*  index type properties: help to create object with more 
flexibility regarding the properties they might hold */

interface ErrorContainer {
  [prop: string]: string;
  //   id: string; // Correct: conforms to index type
  // year?: number; // Incorrect: must conform to index type
  // childNumber: number; // Incorrect: must conform to index type
}

const errorPool: ErrorContainer = {
  // email: 1, // Incorrect: must conform to index type
  email: "Invalid email", // OK
};
