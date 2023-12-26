///<reference path="./base_component.ts" />

namespace App {
  export class ProjectList
    extends Component<HTMLDivElement, HTMLElement>
    implements DragTarget
  {
    assignedProjects: Project[];

    constructor(private type: ProjectStatusEnum) {
      super("project-list", "app", false, `${type}-projects`);
      this.assignedProjects = [];
      this.configure();
      this.renderContent();
    }

    @autoBind
    dragOverHandler(event: DragEvent): void {
      if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
        const listElement = this.element.querySelector(
          "ul",
        )! as HTMLUListElement;
        listElement.classList.add("droppable");
      }
    }

    @autoBind
    dropHandler(event: DragEvent): void {
      const projectId = event.dataTransfer!.getData("text/plain");
      projectState.moveProject(
        projectId,
        this.type === "active"
          ? ProjectStatusEnum.ACTIVE
          : ProjectStatusEnum.FINISHED,
      );
    }

    @autoBind
    dragLeaveHandler(_event: DragEvent): void {
      const listElement = this.element.querySelector("ul")! as HTMLUListElement;
      listElement.classList.remove("droppable");
    }

    configure(): void {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandler);
      this.element.addEventListener("drop", this.dropHandler);

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
}
