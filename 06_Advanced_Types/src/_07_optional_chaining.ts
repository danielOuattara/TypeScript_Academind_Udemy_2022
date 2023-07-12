export {};

console.log("--------------------------------------");

/* _07_optional_chaining.ts
----------------------------

we do not know for sure if a property is defined

*/

const fetchedUserData_1 = {
  id: "u_01",
  name: "Daniel",
  job: { title: "CEO", description: "super company" },
};

console.log(fetchedUserData_1.job?.title);

//---------------------------------------------

const fetchedUserData_2 = {
  id: "u_01",
  name: "Daniel",
  job: { description: "super company" },
};

const jobTitle = fetchedUserData_2?.job?.title;
console.log("jobTitle = ", jobTitle);
