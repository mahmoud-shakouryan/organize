import { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue} from '../context/index';
import IndividualProject from './IndividualProject';


const Projects = ({ activeValue = null }) => {

        const [active, setActive] = useState(activeValue);            //active
        const { setSelectedProject } = useSelectedProjectValue();           //?????? chera object destructuring?
        const { projects } = useProjectsValue();                              //?????? chera object destructuring?

            return(
                projects && projects.map( project => (
                    <li 
                    key={project.projectId} 
                    data-doc-id={project.docId} 
                    className={active === project.projectId ? 'sidebar__project active':'sidebar__project'}
                    onKeyDown={ () => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    onClick={ () => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    >
                        <IndividualProject project={project}/>
                    </li>    
                ))
            );


};



export default Projects;                    