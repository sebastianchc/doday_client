import { createContext } from "react";
import { ProjectsStateType } from "utils/types/states/types";

const ProjectsContext = createContext({} as ProjectsStateType);

export default ProjectsContext;
