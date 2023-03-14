/*  starting generics
---------------------- */

const names1_1 = ["Daniel", "Julie"]; // over me

const names1_2 = []; // over me

const names1_3: Array<string> = []; // over me

const names1_4: Array<string | number> = []; // over me

//
//-------- promise type

// OK
const promise1_1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise1_1.then((data) => data.split(" ")); // OK

//  OK
const promise1_2: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise1_2.then((data) => data.split(" ")); // OK
