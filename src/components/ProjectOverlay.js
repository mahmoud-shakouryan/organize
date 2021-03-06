import { useEffect } from "react";
import { useProjectsValue } from "./context";




const ProjectOverlay = ({ setProject, showProjectOverlay, setShowProjectOverlay }) => {

    const { projects } = useProjectsValue();

   

    return (
        projects && showProjectOverlay && (
            <div className='project-overlay'>
                <ul className='project-overlay__list'> 
                {projects.map(project => (
                    <li
                    key={Math.random()}
                    onClick={()=>{
                        setProject(project.projectId);
                        setShowProjectOverlay(false);
                    }}
                    >
                        {project.name}
                        </li>
                ))}
                </ul>
            </div>
        )
    );
}



export default ProjectOverlay;