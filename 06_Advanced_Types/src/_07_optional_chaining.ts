console.log("-----------");

/* _07_optional_chaining.ts
----------------------------

we do not know for sure if a property is valid

*/

const fetchedUserData = {
  id: "u_01",
  name: "Daniel",
  job: { title: "CEO", description: "super company" },
};

console.log(fetchedUserData.job?.title);
