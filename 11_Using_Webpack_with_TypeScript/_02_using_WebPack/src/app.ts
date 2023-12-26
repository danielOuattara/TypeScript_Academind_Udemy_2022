import { ProjectInput } from "./components/project_inputs";
import { ProjectList } from "./components/project_list";
import { ProjectStatusEnum } from "./models/project";

new ProjectInput();
new ProjectList(ProjectStatusEnum.ACTIVE);
new ProjectList(ProjectStatusEnum.FINISHED);

console.log("Hello there");
