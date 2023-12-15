export {};

/*  starting generics
---------------------- */

const names1_1 = ["Daniel", "Julie"]; // over me

let names1_2: string[]; // over me
// OR
const names1_2_bis: Array<string> = []; // over me

const names1_3: (string | number)[] = ["1", 2]; // over me
// OR
const names1_3_bis: Array<string | number> = ["1", 2]; // over me

//-------- promise type

// OK
const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise_1.then((data) => data.split(" ")); // Error:  'data' is of type 'unknown'.ts(18046)

//----  Is the same as below

const promise_2: Promise<unknown> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise_2.then((data) => data.split(" ")); // Error:  'data' is of type 'unknown'.ts(18046)

//----------------------------------------------------------- OK

const promise_3: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise_3.then((data) => data.split(" ")); // OK
