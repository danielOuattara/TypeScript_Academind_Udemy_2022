export {};

/*  starting generics
---------------------- */

const names1_1 = ["Daniel", "Julie"]; // over me

let names1_2: string[]; // over me
const names1_2_bis: (string | number)[] = ["1", 2]; // over me

const names1_3: Array<string> = []; // over me

const names1_4: Array<string | number> = ["1", 2]; // over me

//
//-------- promise type

// OK
const promise1_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise1_1.then((data) => data.split(" ")); // Error:  'data' is of type 'unknown'.ts(18046)

//----------------------------------------------------------- OK
const promise1_2: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise1_2.then((data) => data.split(" ")); // OK
