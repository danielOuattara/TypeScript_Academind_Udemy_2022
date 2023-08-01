export {};

interface ValidatorConfig {
  [property: string]: {
    [validableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

// decorator: targeting a field element
function Required(target: any, propName: string) {
  console.log(target);

  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

// decorator
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  } else {
    let isValid = true;
    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case "required":
            isValid = isValid && !!obj[prop];
            break;
          case "positive":
            isValid = isValid && obj[prop] > 0;
            break;
        }
      }
    }
    return true;
  }
}

class Course {
  @Required
  _title: string;
  @PositiveNumber
  _price: number;

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInputElement = document.getElementById(
    "title",
  ) as HTMLInputElement;
  const priceInputElement = document.getElementById(
    "price",
  ) as HTMLInputElement;

  const title = titleInputElement.value;
  const price = Number(priceInputElement.value);

  const course_1 = new Course(title, price);
  console.log(course_1);

  if (!validate(course_1)) {
    alert("Invalid input, please try again");
  }
});
