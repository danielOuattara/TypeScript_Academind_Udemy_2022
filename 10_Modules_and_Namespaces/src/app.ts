///<reference path="./models/drag_and_drop.ts" />
///<reference path="./models/project.ts" />

///<reference path="./state/project_state_management.ts" />

///<reference path="./utils/project_validation.ts" />

///<reference path="./decorators/autobind.ts" />


///<reference path="./components/project_item.ts" />
///<reference path="./components/project_inputs.ts" />
///<reference path="./components/project_list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList(ProjectStatusEnum.ACTIVE);
  new ProjectList(ProjectStatusEnum.FINISHED);
}
