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
        .where('userId', '==', 'jlIFXIwyAL3tzHMtzRbw');
  
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
// const selectedProject = 1; 
// const { tasks , archivedTasks } = useTasks(selectedProject);


// custom hook #2
export const useProjects = () => {
    console.log('hook#2')
    const [ projects, setProjects ] = useState([]);
   useEffect(() => {
       const dbAccess =  firebase.firestore().collection('projects').get();
       dbAccess
        .then(result => {
            const allProjects = result.docs.map( project => ({
                ...project.data(),
                docId:project.id
            }));
         if(JSON.stringify(allProjects) !== JSON.stringify(projects)) {       //just avoiding infinite loop
            setProjects(allProjects);        //age bedoone if faghat hamin setProjects ro benivisim , useEffect inifinte loop ejra mishe.
           }
        });
    },[projects]);

    return { projects, setProjects };             //{ projects : projects, setProjects : setProjects }

}