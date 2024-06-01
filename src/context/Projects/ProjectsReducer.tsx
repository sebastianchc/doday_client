import {
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_POPUP_IS_OPEN,
  SET_POPUP_STATUS,
  SET_PROJECT,
  SET_PROJECTS,
  UPDATE_PROJECT,
} from "utils/types/actions/types";
import { ProjectType } from "utils/types/states/types";

const ProjectsReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case SET_PROJECT:
      return {
        ...state,
        project: state.projects.find(
          (project: ProjectType) => project.id === action.payload
        ),
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project: ProjectType) =>
          project.id === action.payload.id ? action.payload : project
        ),
        project: action.payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project: ProjectType) => project.id !== action.payload
        ),
        project: null,
      };
    case SET_POPUP_IS_OPEN:
      return {
        ...state,
        popupIsOpen: action.payload,
      };
    case SET_POPUP_STATUS:
      return {
        ...state,
        popupIsOpen: action.payload,
      };
    default:
      return state;
  }
};

export default ProjectsReducer;
