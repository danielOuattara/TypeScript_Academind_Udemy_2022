console.log("-----------");

/*  index type properties: help to create object with more 
flexibility regarding the properties they might hold */

interface ErrorContainer {
  //
  [prop: string]: string; // More flexible. string, number, symbol. NO boolean

  // id: string; // Correct: conforms to index type
  // year?: number; // Incorrect: must conform to index type
  // childNumber: number; // Incorrect: must conform to index type
}

const errorPool: ErrorContainer = {
  // email: 1, // Incorrect: must conform to index type
  email: "Invalid email", // OK
  password: "Password is invalid, try again",
};

console.log("errorPool = ", errorPool);

//-----------------------------------------------------

interface ErrorContainer_2 {
  [prop: number]: string;
  message: string;
}

const errorPool_2: ErrorContainer_2 = {
  500: "Server Error",
  404: "Not Found",
  401: "Not authenticated",
  403: "Not authorized",
  message: "Error",
};

console.log("errorPool_2 = ", errorPool_2);
