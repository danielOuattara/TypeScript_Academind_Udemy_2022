import { Project, ProjectStatusEnum } from "./../models/project";

// Project State Management
type ListenerFunctionType<T> = (items: T[]) => void;

//---
class StateComponent<T> {
  protected listeners: ListenerFunctionType<T>[] = [];
  addListener(listenerFunction: ListenerFunctionType<T>) {
    this.listeners.push(listenerFunction);
  }
}

//---
export class ProjectState extends StateComponent<Project> {
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
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatusEnum) {
    const projectToMove = this.projects.find(
      (project) => project.id === projectId,
    );
    if (projectToMove && projectToMove.description !== newStatus) {
      projectToMove.status = newStatus;
      this.updateListeners();
    }
  }

  updateListeners() {
    for (const listenerFunction of this.listeners) {
      listenerFunction(this.projects.slice());
    }
  }
}

// create a single state management instance
export const projectState = ProjectState.getInstance();
