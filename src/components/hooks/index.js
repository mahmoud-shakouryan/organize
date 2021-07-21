import { useEffect, useState } from 'react';
import { firebase } from '../../firebase';
import {collatedTasksExist} from '../helpers/index';
import moment from 'moment';


// custom hook #1 
export const useTasks = selectedProject => {              //SHARE THE DATE, NOT THE LOGIC.
    console.log('hook#1')
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
  
    useEffect(() => {
      let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', '1234567890');
  
      unsubscribe =
        selectedProject && !collatedTasksExist(selectedProject)
          ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
          : selectedProject === 'TODAY'
          ? (unsubscribe = unsubscribe.where(
              'date',
              '==',
              moment().format('DD/MM/YYYY')
            ))
          : selectedProject === 'INBOX' || selectedProject === 0
          ? (unsubscribe = unsubscribe.where('date', '==', ''))
          : unsubscribe;
  
      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }));
  
        setTasks(
          selectedProject === 'NEXT_7'
            ? newTasks.filter(
                task =>
                  moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                  task.archived !== true
              )
            : newTasks.filter(task => task.archived !== true)
        );
        setArchivedTasks(newTasks.filter(task => task.archived !== false));
      });
  
      return () => unsubscribe();
    }, [selectedProject]);
  
    return { tasks, archivedTasks };
   
    };

// custom hook #2
export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    console.log('hook#2',projects)
    useEffect(() => {
    const db = firebase.firestore().collection('projects').where('userId','==','1234567890').orderBy('projectId').get();
    db.then(result => {
        const allProjects = result.docs.map( project => ({
            docId:project.id,
            ...project.data()
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
            setProjects(allProjects);
          }
    console.log('hook#2(useEffect)',projects)

    })
    .catch(err=>{
        console.log('useProjects error',err);
    });
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return { projects, setProjects };

}



