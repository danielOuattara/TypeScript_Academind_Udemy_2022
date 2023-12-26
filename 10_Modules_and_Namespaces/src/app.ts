///<reference path="./components/project_inputs.ts" />
///<reference path="./components/project_list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList(ProjectStatusEnum.ACTIVE);
  new ProjectList(ProjectStatusEnum.FINISHED);
}
