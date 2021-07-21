import { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "./context/index";
import IndividualProject from "./IndividualProject";

const Projects = () => {
  console.log('Projects');

  const [active, setActive] = useState(null);                      //active
  const { setSelectedProject } = useSelectedProjectValue();         // faghat context  
  const { projects } = useProjectsValue();                  //be context be hook          
 
  return (
    projects &&
    projects.map(project => (
      <li
        key={Math.random()}
        className={
          active === project.projectId
            ? "sidebar__project active"
            : "sidebar__project"
        }
      >
        <div
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
        >
          <IndividualProject className='individualProjectComp' project={project} />
        </div>
      </li>
    ))
  );
};

export default Projects;
