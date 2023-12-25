// Project Type

enum ProjectStatusEnum {
  ACTIVE,
  FINISHED,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatusEnum,
  ) {}
}

//-------------------------------------------

// Project State Management

type ListenerFunctionType = (items: Project[]) => void;

//---
class ProjectState {
  private listeners: ListenerFunctionType[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new ProjectState();
      return this.instance;
    }
  }

  addListener(listenerFunction: ListenerFunctionType) {
    this.listeners.push(listenerFunction);
  }

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = new Project(
      new Date().getTime().toString(),
      title,
      description,
      numberOfPeople,
      ProjectStatusEnum.ACTIVE,
    );
    this.projects.push(newProject);

    for (const listenerFunction of this.listeners) {
      listenerFunction(this.projects.slice());
    }
  }
}

// create a single state management instance
const projectState = ProjectState.getInstance();

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
class ProjectList {
  templateElement: HTMLTemplateElement;
  divHostElement: HTMLDivElement;
  sectionElement: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list",
    )! as HTMLTemplateElement;
    this.divHostElement = document.getElementById("app")! as HTMLDivElement;
    this.assignedProjects = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );

    this.sectionElement = importedNode.firstElementChild as HTMLElement;
    this.sectionElement.id = `${this.type}-projects`;

    projectState.addListener((projects: Project[]) => {
      this.assignedProjects = projects;
      this.renderProjects();
    });
    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listElement = document.getElementById(
      `${this.type}-projects-list`,
    )! as HTMLUListElement;

    for (const project of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = project.title;
      listElement.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.sectionElement.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
    this.sectionElement.querySelector("ul")!.id = listId;
  }

  private attach() {
    this.divHostElement.insertAdjacentElement("beforeend", this.sectionElement);
  }
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
      projectState.addProject(title, description, people);
      // console.log(title, description, people);
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
const activeProjectsList = new ProjectList("active");
const finishedProjectsList = new ProjectList("finished");
