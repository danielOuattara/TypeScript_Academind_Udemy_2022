/* Never Types 
============== */

function generateError_1(message: string, code: number) {
  throw { message, code };
}

const result1 = generateError_1("Bad Request", 400);

console.log("result1 = ", result1);

//------------------------------------------------------------------

function generateError_2(message: string, code: number): never {
  throw { message, code };
}

const result2 = generateError_2("Bad Request", 400);

console.log("result2 = ", result2);
