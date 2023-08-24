// autoBind decorator

function autoBind(
  _target: any,
  _methodName: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  // console.log(" --- Method Decorator --- ");
  // console.log("target = ", _target);
  // console.log("MethodName = ", _methodName);
  // console.log("method descriptor = ", descriptor);

  const originalMethod = descriptor.value;
  const adjustableDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustableDescriptor;
}

//
// Project input class
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
    ) as HTMLTemplateElement;

    this.divHostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );

    this.formElement = importedNode.firstElementChild as HTMLFormElement;
    this.formElement.id = "user-input";

    this.titleInputElement = this.formElement.querySelector(
      "#title",
    ) as HTMLInputElement;

    this.descriptionInputElement = this.formElement.querySelector(
      "#description",
    ) as HTMLInputElement;

    this.peopleInputElement = this.formElement.querySelector(
      "#people",
    ) as HTMLInputElement;

    //----------------
    this.configure();
    this.attach();
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
    this.formElement.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.divHostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const projectInput = new ProjectInput();
