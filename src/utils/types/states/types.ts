// PROJECTS
export interface ProjectType {
  id: number;
  projectTag: string;
  projectStatus: boolean;
  projectName: string;
  projectDescription: string;
}
export interface ProjectsStateType {
  projects: ProjectType[];
  project: ProjectType;
  popupIsOpen: boolean;
  popupStatus: string;
  setProjects: (projects: ProjectType[]) => void;
  addProject: (project: ProjectType) => void;
  setProject: (projectId: number) => void;
  updateProject: (project: ProjectType) => void;
  deleteProject: (projectId: number) => void;
  setPopupIsOpen: (isOpen: boolean) => void;
  setPopupStatus: (status: string) => void;
}
