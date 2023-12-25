export {};

interface ValidatorConfig {
  [property: string]: {
    [validableProp: string]: string[]; // --> ["required, positive"]
  };
}

const registeredValidators: ValidatorConfig = {};

// decorator: targeting a field element
function Required(target: any, propName: string) {
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

//
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  } else {
    let isValid = true;
    for (const prop in objValidatorConfig) {
      console.log("prop = ", prop);

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
    return isValid;
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

const courseForm = document.querySelector("form")! as HTMLFormElement;
const titleInputElement = document.getElementById("title") as HTMLInputElement;
const priceInputElement = document.getElementById("price") as HTMLInputElement;

//

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInputElement.value;
  const price = parseFloat(priceInputElement.value);

  const course_1 = new Course(title, price);
  console.log(course_1);

  console.log("validate(course_1) = ", validate(course_1));

  if (!validate(course_1)) {
    return alert("Invalid input, please try again");
  }
});



/* 

    const config: { [input: string]: string[] } = {};
     
    const addValidator = (input: string, type: string) => {
      config[input] = config[input] 
        ? [...config[input], type] 
        : [type];
    }
     
    const Required = (_: any, input: string) => addValidator(input, 'required');
    const Maxlength = (_: any, input: string) => addValidator(input, 'maxlength');
    const Positive = (_: any, input: string) => addValidator(input, 'positive');
     
    const validate = (course: any) =>  
      Object.entries(config).every(([input, types]) => 
        types.every(type => 
          type === 'required' && course[input] || 
          type === 'positive' && course[input] > 0 ||
          type === 'maxlength' && course[input].length < 5
        )
      )
     
    class Course {
      
      @Required @Maxlength title: string;
      @Required @Positive price: number;
     
      constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
      }
     
    }


*/