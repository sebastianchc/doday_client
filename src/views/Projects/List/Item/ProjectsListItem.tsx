import { BlackEdit, BlackTrash, WhiteEdit, WhiteTrash } from "assets/images";
import { ButtonDynamic, ButtonStatic } from "components/Button";
import ProjectsContext from "context/Projects/ProjectsContext";
import { Fragment, useContext, useState } from "react";
import { TimeProps } from "utils/types/props/types";
import { ProjectType } from "utils/types/states/types";

interface ProjectsListItemProps extends TimeProps {
  project: ProjectType;
}

const ProjectsListItem = ({ project, time }: ProjectsListItemProps) => {
  const [projectIsOpen, setProjectIsOpen] = useState(false);
  const { deleteProject } = useContext(ProjectsContext);
  const { projectName, id } = project;

  const handleDeleteProject = async () => {
    deleteProject(id);
  };

  return (
    <div
      className={`projects-list-item ${
        projectIsOpen ? "projects-list-item--size" : ""
      }`}
    >
      <ButtonStatic
        type="button"
        onClick={() => setProjectIsOpen(!projectIsOpen)}
        calledFrom="main"
      >
        <h2
          className={`projects-list-item__text projects-list-item__text--${time}`}
        >
          {projectName}
        </h2>
      </ButtonStatic>
      {projectIsOpen ? (
        <Fragment>
          <ButtonDynamic
            type="button"
          >
            {time === 11 || time === 12 ? <BlackEdit /> : <WhiteEdit />}
          </ButtonDynamic>
          <ButtonDynamic type="button" onClick={handleDeleteProject}>
            {time === 11 || time === 12 ? <BlackTrash /> : <WhiteTrash />}
          </ButtonDynamic>
        </Fragment>
      ) : null}
      {projectIsOpen ? <p>Hola</p> : null}
    </div>
  );
};

export default ProjectsListItem;
