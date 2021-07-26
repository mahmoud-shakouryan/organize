import {useEffect} from 'react';
import Checkbox from "./Checkbox";
import { useTasks } from "./hooks/index";
import { useProjectsValue, useSelectedProjectValue } from "./context/index";
import {
  collatedTasksExist,
  getCollatedTitle,
  getTitle,
} from "./helpers/index";
import collatedTasks from "./constants/index";
import AddTask from "./AddTask";




const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();            //context 1.
  const { projects } = useProjectsValue();                        //context 2 (oon too be hooke 2 useProjects vasl mishe)
  const { tasks } = useTasks(selectedProject);      //custom hook #1 // selectedProject ro az context 1 gereftim

  let projectName = "";
  
  if (projects && selectedProject && projects.length > 0 && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }
  if (collatedTasksExist(selectedProject) && selectedProject) {          //in function ro mitoonest biare hminja valli outsource karde va hamintor baraye balaee
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName} : Organize`;
  }, [projectName])
  
  return (
    <div className="tasks">
      <h2>{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={task.id}>             {/*task.id ro stringesh kard fek konam*/}
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask/>
    </div>
  );
};

export default Tasks;
