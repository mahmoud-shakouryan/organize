import collatedTasks from '../constants/index';

export const collatedTasksExist = selectedProject => {   //check kardane inke projeye select shode az oon sabet haye samte chape ya na.
    return collatedTasks.find( task => task.key === selectedProject);
}

export const getTitle = (projects, projectId) => {                //moghe'ee ke az projehaye sabete samte chap estefade nashe va projehaye custom'e khode karbar estefade beshe.
   return  projects.find(project => project.projectId === projectId);
}

export const getCollatedTitle = (projects, key) => {   //moghe'ee ke proje'ye select shode hamoon projeye sabete samte chape.
    return projects.find(project => project.key === key);
}





