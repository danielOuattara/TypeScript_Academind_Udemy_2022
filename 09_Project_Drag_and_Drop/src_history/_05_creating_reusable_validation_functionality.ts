export {};

// validation
interface Validation {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

//-------------------------------------------
function validator(item: Validation) {
  let isValid = true;
  if (item.required) {
    isValid = isValid && item.value.toString().trim().length !== 0;
  }

  if (item.minLength != null && typeof item.value === "string") {
    isValid = isValid && item.value.trim().length >= item.minLength;
  }

  if (item.maxLength != null && typeof item.value === "string") {
    isValid = isValid && item.value.trim().length <= item.maxLength;
  }

  if (item.min != null && typeof item.value === "number") {
    isValid = isValid && item.value >= item.min;
  }

  if (item.max != null && typeof item.value === "number") {
    isValid = isValid && item.value <= item.max;
  }

  return isValid;
}
// validator({ value: enteredTitle, required: true, minLength:5}

//-------------------------------------------
// autoBind decorator
function autoBind(
  _target: any,
  _methodName: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}

//-------------------------------------------

class ProjectInput {
  templateElement: HTMLTemplateElement;
  divHostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input",
    )! as HTMLTemplateElement;

    this.divHostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );

    this.formElement = importedNode.firstElementChild as HTMLFormElement;
    this.formElement.id = "user-input";

    this.titleInputElement = this.formElement.querySelector(
      "#title",
    )! as HTMLInputElement;

    this.descriptionInputElement = this.formElement.querySelector(
      "#description",
    )! as HTMLInputElement;

    this.peopleInputElement = this.formElement.querySelector(
      "#people",
    )! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  // gather data & validate
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = parseFloat(this.peopleInputElement.value);

    if (
      validator({ value: enteredTitle, required: true, minLength: 3 }) &&
      validator({ value: enteredDescription, required: true, minLength: 3 }) &&
      validator({ value: enteredPeople, required: true, min: 1 })
    ) {
      return [enteredTitle, enteredDescription, enteredPeople];
    } else {
      alert("Invalid input, please correct and try again");
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      console.log(title, description, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.formElement.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.divHostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const projectInput = new ProjectInput();
