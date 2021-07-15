import Checkbox from "./Checkbox";
import { useTasks } from "../hooks";
import { useProjectsValue, useSelectedProjectValue } from "./context/index";
import {
  collatedTasksExist,
  getCollatedTitle,
  getTitle,
} from "./helpers/index";
import collatedTasks from "./constants/index";




const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue(); //vasl shodan be context >> value hash >> local state.
  const { projects } = useProjectsValue(); //vasl shodan be context >> value hash >> custom hook.
  const { tasks } = useTasks(selectedProject); //custom hook #1

  let projectName = "";
  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }
  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }


  //////////////inja ye useEffect neveshte bood
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="projectName">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
