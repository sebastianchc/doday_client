import { TimeProps } from "utils/types/props/types";
import { ProjectType } from "utils/types/states/types";
import ProjectsListItem from "./Item/ProjectsListItem";

interface ProjectsListProps extends TimeProps {
  projects: ProjectType[];
}

const ProjectsList = ({ time, projects }: ProjectsListProps) => {
  return (
    <div className="projects-list">
      {projects.length === 0 ? (
        <p>Start adding a project</p>
      ) : (
        projects.map((project, i) => (
          <ProjectsListItem key={i} project={project} time={time} />
        ))
      )}
    </div>
  );
};

export default ProjectsList;
