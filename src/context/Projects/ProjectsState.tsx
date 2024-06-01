import { useReducer } from "react";
import {
  SET_PROJECTS,
  ADD_PROJECT,
  SET_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  SET_POPUP_IS_OPEN,
  SET_POPUP_STATUS,
} from "utils/types/actions/types";
import { ChildrenProps } from "utils/types/props/types";
import { ProjectType } from "utils/types/states/types";
import ProjectsContext from "./ProjectsContext";
import ProjectsReducer from "./ProjectsReducer";

interface ProjectsStateProps extends ChildrenProps {}

const ProjectsState = ({ children }: ProjectsStateProps) => {
  const initialState = {
    projects: [],
    project: null,
    popupIsOpen: false,
    popupStatus: "",
  };

  const [state, dispatch] = useReducer(ProjectsReducer, initialState);

  const setProjects = async (projects: ProjectType[]) => {
    dispatch({
      type: SET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = async (project: ProjectType) => {
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const setProject = async (projectId: number) => {
    dispatch({
      type: SET_PROJECT,
      payload: projectId,
    });
  };

  const updateProject = async (project: ProjectType) => {
    dispatch({
      type: UPDATE_PROJECT,
      payload: project,
    });
  };

  const deleteProject = async (projectId: number) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  const setPopupIsOpen = async (isOpen: boolean) => {
    dispatch({
      type: SET_POPUP_IS_OPEN,
      payload: isOpen,
    });
  };

  const setPopupStatus = async (status: string) => {
    dispatch({
      type: SET_POPUP_STATUS,
      payload: status,
    });
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        popupIsOpen: state.popupIsOpen,
        popupStatus: state.popupStatus,
        setProjects,
        addProject,
        setProject,
        updateProject,
        deleteProject,
        setPopupIsOpen,
        setPopupStatus,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsState;
