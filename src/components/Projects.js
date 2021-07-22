import { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "./context/index";
import IndividualProject from "./IndividualProject";

const Projects =() => {
  const [active, setActive] = useState(null); //active
  const { setSelectedProject } = useSelectedProjectValue(); // faghat context
  const { projects } = useProjectsValue(); //be context be hook#2
  return (
    projects &&
    projects.map((project) => (
      <li
        key={Math.random()}
        className={
          active === project.projectId
            ? "sidebar__project active"
            : "sidebar__project"
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
          <IndividualProject
            project={project}
          />
      </li>
    ))
  );
};

export default Projects;
