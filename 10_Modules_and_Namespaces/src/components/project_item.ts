///<reference path="./base_component.ts" />

namespace App {
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    private project: Project;

    get persons() {
      if (this.project.people === 1) {
        return "1 person ";
      } else {
        return `${this.project.people} persons `;
      }
    }
    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }

    @autoBind
    dragStartHandler(event: DragEvent): void {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    dragEndHandler(_event: DragEvent): void {}

    configure(): void {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent(): void {
      (this.element.querySelector("h2")! as HTMLHeadingElement).textContent =
        this.project.title;
      (this.element.querySelector("h3")! as HTMLHeadingElement).textContent =
        this.persons + " assigned";
      (this.element.querySelector("p")! as HTMLParagraphElement).textContent =
        this.project.description;
    }
  }
}
