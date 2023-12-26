// Project Type

enum ProjectStatusEnum {
  ACTIVE = "active",
  FINISHED = "finished",
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

type ListenerFunctionType<T> = (items: T[]) => void;

class StateComponent<T> {
  protected listeners: ListenerFunctionType<T>[] = [];
  addListener(listenerFunction: ListenerFunctionType<T>) {
    this.listeners.push(listenerFunction);
  }
}

//---
class ProjectState extends StateComponent<Project> {
  // private listeners: ListenerFunctionType[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new ProjectState();
      return this.instance;
    }
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
// starting inheritance: Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateElementId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string,
  ) {
    this.templateElement = document.getElementById(
      templateElementId,
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );

    this.element = importedNode.firstElementChild as U;
    newElementId ? (this.element.id = newElementId) : "";

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? "afterbegin" : "beforeend",
      this.element,
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

//-------------------------------------------

// Project item
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;
  constructor(hostId: string, project: Project) {
    console.log("hostId = ", hostId);

    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure(): void {}
  renderContent(): void {
    (this.element.querySelector("h2")! as HTMLHeadingElement).textContent =
      this.project.title;
    (this.element.querySelector("h3")! as HTMLHeadingElement).textContent =
      this.project.people.toString();
    (this.element.querySelector("p")! as HTMLParagraphElement).textContent =
      this.project.description;
  }
}

//-------------------------------------------
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];

  constructor(private type: ProjectStatusEnum) {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];
    this.configure();
    this.renderContent();
  }

  configure(): void {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === ProjectStatusEnum.ACTIVE) {
          return project.status === ProjectStatusEnum.ACTIVE;
        } else {
          return project.status === ProjectStatusEnum.FINISHED;
        }
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
    this.element.querySelector("ul")!.id = listId;
  }

  private renderProjects() {
    const listElement = document.getElementById(
      `${this.type}-projects-list`,
    )! as HTMLUListElement;

    listElement.innerHTML = "";

    for (const project of this.assignedProjects) {
      new ProjectItem(
        (this.element.querySelector("ul") as HTMLUListElement).id,
        project,
      );
    }
  }
}

//-------------------------------------------
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title",
    )! as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      "#description",
    )! as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      "#people",
    )! as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}

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
      this.clearInputs();
    }
  }
}

const projectInput = new ProjectInput();
const activeProjectsList = new ProjectList(ProjectStatusEnum.ACTIVE);
const finishedProjectsList = new ProjectList(ProjectStatusEnum.FINISHED);
