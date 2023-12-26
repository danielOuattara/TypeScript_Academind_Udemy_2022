///<reference path="./base_component.ts" />
///<reference path="./../decorators/autobind.ts" />
///<reference path="./../utils/project_validation.ts" />
///<reference path="./../state/project_state_management.ts" />
namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
        validator({
          value: enteredDescription,
          required: true,
          minLength: 3,
        }) &&
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
}
