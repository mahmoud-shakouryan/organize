import { useEffect, useState } from 'react';
import { firebase } from '../../firebase';
import {collatedTasksExist} from '../helpers/index';
import moment from 'moment';


// custom hook #1 
export const useTasks = selectedProject => {              //SHARE THE DATA, NOT THE LOGIC.

    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
    
    useEffect(() => {
      let mustDo = firebase.firestore().collection('tasks').where('userId', '==', '1234567890');
      
      if( selectedProject && !collatedTasksExist(selectedProject)){    //az sabet'haye samte chap nist
        mustDo = mustDo.where('projectId', '==', selectedProject)
      }
      else if(selectedProject === 'INBOX'){
        mustDo = mustDo.where('date', '==', '');       //pas inbox oonie ke tarikhi nadare .
      }
      else if (selectedProject === 'TODAY'){
        mustDo = mustDo.where('date', '==', moment().format('DD/MM/YYYY'))
      }

      mustDo = mustDo.onSnapshot(snapshot => {               // return mikone araye'ee (newTasks) az task'ha ba id'e oon document
        const newTasks = snapshot.docs.map(task => ({        //onSnapShot bejaye get montaha ba emale taghirat dar firebase cloud firestore
          id: task.id,
          ...task.data(),
        }));
        
        
        
        const next_7_tasks = newTasks.filter(task => ( moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7) && task.archived === false );
        setTasks(selectedProject === 'NEXT_7' ?  next_7_tasks : newTasks.filter( task => task.archived === false )) ;
        setArchivedTasks( newTasks.filter( task => task.archived === true ));
      });
  
      return () => mustDo();               //??????????????
    }, [selectedProject]);
  
    return { tasks, archivedTasks };
   
    };





    // custom hook #2
export const useProjects = () => {
    const [projects, setProjects] = useState([]);
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

    })
    .catch(err=>{
        console.log('useProjects error',err);
    });
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return { projects, setProjects };

}



