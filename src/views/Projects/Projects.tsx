import ProjectsContext from "context/Projects/ProjectsContext";
import { useContext } from "react";
import useTime from "services/useTime";
import ProjectsList from "./List/ProjectsList";
import ProjectsNavbar from "./Navbar/ProjectsNavbar";
import ProjectsPopup from "./Popup/ProjectsPopup";

const Projects = () => {
  const {
    projects,
    project,
    popupIsOpen,
    popupStatus,
    setProject,
    addProject,
    updateProject,
    setPopupIsOpen,
    setPopupStatus,
  } = useContext(ProjectsContext);
  const { time } = useTime("hours");

  // useEffect(() => {
  //   const getProjects = async () => {
  //     setProjects(projects);
  //   };
  //   getProjects();
  // }, []);

  return (
    <article className="projects">
      <ProjectsNavbar
        time={time}
        popupStatus=""
        setPopupIsOpen={setPopupIsOpen}
        setPopupStatus={setPopupStatus}
        setProject={setProject}
      />
      <ProjectsList time={time} projects={projects} />
      {popupIsOpen ? (
        <ProjectsPopup
          time={time}
          popupStatus={popupStatus}
          setPopupIsOpen={setPopupIsOpen}
          setPopupStatus={setPopupStatus}
          project={project}
          addProject={addProject}
          updateProject={updateProject}
        />
      ) : null}
    </article>
  );
};

export default Projects;
