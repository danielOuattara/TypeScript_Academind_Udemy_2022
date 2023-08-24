class ProjectInput {
  templateElement: HTMLTemplateElement;
  divHostElement: HTMLDivElement;
  formElement: HTMLFormElement;

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
    this.attach();
  }

  private attach() {
    this.divHostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const projectInput = new ProjectInput();
