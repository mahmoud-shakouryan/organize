import { useProjectsValue } from "../context";




const ProjectOverlay = ({ setQuickProject, showQuickProjectOverlay, setShowQuickProjectOverlay }) => {

    const { projects } = useProjectsValue();
    return (
        projects && showQuickProjectOverlay && (
            <div className='project-overlay'>
                <ul className='project-overlay__list'> 
                {projects.map(project => (
                    <li
                    key={Math.random()}
                    onClick={()=>{
                        setQuickProject(project.projectId);
                        setShowQuickProjectOverlay(false);
                    }}
                    >
                        {project.projectName}
                        </li>
                ))}
                </ul>
            </div>
        )
    );
}



export default ProjectOverlay;