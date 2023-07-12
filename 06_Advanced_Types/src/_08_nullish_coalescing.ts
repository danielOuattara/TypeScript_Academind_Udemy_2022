export {};

/* nullish coalescing 
-----------------------

*/

const message = null;
const userMessage = message ?? "No Input";
console.log(userMessage);

//------------------------

const country = undefined;
const userCountry = country ?? "Country Unknown";
console.log(userCountry);
