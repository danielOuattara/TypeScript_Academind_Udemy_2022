// starting inheritance: Component Base Class

namespace App {
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement,
  > {
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
}