// Project Type

namespace App {
  export enum ProjectStatusEnum {
    ACTIVE = "active",
    FINISHED = "finished",
  }

  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatusEnum,
    ) {}
  }
}
