import {
  BlackDescription,
  BlackTag,
  WhiteDescription,
  WhiteTag,
} from "assets/images";
import { Dropdown, InputText, Popup, Textarea } from "components";
import { FormEvent, useState } from "react";
import { SetPopupProps, TimeProps } from "utils/types/props/types";
import { ProjectType } from "utils/types/states/types";

interface ProjectsPopupProps extends TimeProps, SetPopupProps {
  project: ProjectType;
  addProject: (project: ProjectType) => void;
  updateProject: (project: ProjectType) => void;
}

const ProjectsPopup = ({
  time,
  popupStatus,
  setPopupIsOpen,
  setPopupStatus,
  project,
  addProject,
  updateProject,
}: ProjectsPopupProps) => {
  const [popupProject, setPopupProject] = useState<ProjectType>(
    project
      ? project
      : {
          id: 0,
          projectTag: "",
          projectStatus: false,
          projectName: "",
          projectDescription: "",
        }
  );

  const options = [
    { name: "Health" },
    { name: "Money" },
    { name: "Relationship" },
    { name: "Happiness" },
  ];

  const { projectTag, projectName, projectDescription } = popupProject;

  const handleClose = () => {
    setPopupProject({
      id: 0,
      projectTag: "",
      projectStatus: false,
      projectName: "",
      projectDescription: "",
    });
    setPopupStatus("")
    setPopupIsOpen(false);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      projectTag === "" ||
      projectName.trim() === "" ||
      projectDescription.trim() === ""
    ) {
      return;
    }
    if (popupStatus === "Save") {
      addProject(popupProject);
    } else if (popupStatus === "Edit") {
      updateProject(popupProject)
    }
    handleClose()
  };

  return (
    <Popup
      onSubmit={handleSubmit}
      onClose={handleClose}
      popupStatus={popupStatus}
      state={popupProject}
      setState={setPopupIsOpen}
    >
      <InputText
        state={popupProject}
        setState={setPopupProject}
        property="projectName"
        forName={true}
        placeholder="Add Name"
      />
      <div className="popup-form__icon">
        {time === 11 || time === 12 ? <WhiteTag /> : <BlackTag />}
      </div>
      <Dropdown
        state={popupProject}
        setState={setPopupProject}
        property="projectTag"
        options={options}
      />
      <div className="popup-form__icon">
        {time === 11 || time === 12 ? (
          <WhiteDescription />
        ) : (
          <BlackDescription />
        )}
      </div>
      <Textarea
        state={popupProject}
        setState={setPopupProject}
        property="projectDescription"
        placeholder="Add Description"
      />
    </Popup>
  );
};

export default ProjectsPopup;
