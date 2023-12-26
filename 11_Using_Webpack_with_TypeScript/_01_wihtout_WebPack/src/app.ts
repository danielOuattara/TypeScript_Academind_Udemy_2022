import { ProjectInput } from "./components/project_inputs.js";
import { ProjectList } from "./components/project_list.js";
import { ProjectStatusEnum } from "./models/project.js";

new ProjectInput();
new ProjectList(ProjectStatusEnum.ACTIVE);
new ProjectList(ProjectStatusEnum.FINISHED);
