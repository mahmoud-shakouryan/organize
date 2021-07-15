import collatedTasks from '../constants/index';

export const getTitle = (projects, projectId) => {
   return  projects.find(project => project.projectId === projectId);
}

export const getCollatedTitle = (projects, key) => {
    return projects.find(project => project.key === key);
}

export const collatedTasksExist = selectedProject => {
    return collatedTasks.find( task => task.key === selectedProject);
}



//  generatedPushId ??????????????????? oon snippet'e tolide random id ? 