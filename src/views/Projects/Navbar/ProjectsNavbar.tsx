import { BlackPlus, WhitePlus } from "assets/images";
import { Heading } from "components";
import { ButtonStatic } from "components/Button";
import { SetPopupProps, TimeProps } from "utils/types/props/types";

interface ProjectsNavbarProps extends TimeProps, SetPopupProps {
  setProject: (projectId: number) => void;
}

const ProjectsNavbar = ({
  time,
  setPopupIsOpen,
  setPopupStatus,
  setProject,
}: ProjectsNavbarProps) => {
  const handleOpenPopupForAdding = async () => {
    await setProject(-1);
    await setPopupStatus("Save");
    await setPopupIsOpen(true);
  };

  return (
    <nav className="projects-navbar">
      <Heading title="Projects">
        <ButtonStatic
          type="button"
          onClick={() => handleOpenPopupForAdding()}
          calledFrom="main"
        >
          {time === 11 || time === 12 ? <WhitePlus /> : <BlackPlus />}
        </ButtonStatic>
      </Heading>
      <div>Searchbar</div>
      <div>Buttons</div>
    </nav>
  );
};

export default ProjectsNavbar;
