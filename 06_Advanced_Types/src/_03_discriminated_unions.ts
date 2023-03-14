console.log("-------");

/* discriminated union
-----------------------
- helps with type guards
- works well with objects  
*/

interface Bird {
  type: "bird"; // help to discriminate
  year: "2003";
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // help to discriminate
  gallopSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.gallopSpeed;
      break;
    default:
      speed = 0;
  }
  console.log("Moving with speed :" + speed);
}

movingAnimal({ type: "bird", flyingSpeed: 300, year: "2003" });
movingAnimal({ type: "horse", gallopSpeed: 64 });
