export {};

/* Never Types 
============== */

function generateError_1(message: string, code: number) {
  throw { message, code };
}

generateError_1("Bad Request", 400);

//------------------------------------------------------------------

function generateError_2(message: string, code: number): never {
  throw { message, code };
}

generateError_2("Bad Request", 400);
