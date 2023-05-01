/* Function Return Type & Void  
============================== */

function add(input1: number, input2: number): number | string {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return `${input1} ${input2}`;
}

console.log(add(12, 31)); // 43

//

//-----------------------------

function add_2(input1: number, input2: number): void {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return console.log(input1 + input2);
  }
  console.log(`${input1} ${input2}`);
}

add_2(32, 17);
