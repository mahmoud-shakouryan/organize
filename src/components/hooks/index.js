import { useEffect, useState } from 'react';
import { firebase } from '../../firebase';
import {collatedTasksExist} from '../helpers/index';
import moment from 'moment';


// custom hook #1 
export const useTasks = selectedProject => {              //SHARE THE DATE, NOT THE LOGIC.
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
            let unsubscribe = firebase.firestore().collection('tasks').where('userId','==','1234567890'); //fireStore()>>>firestore ro mide(database) collection()>>>collection ro mide.
            
            if(selectedProject && !collatedTasksExist(selectedProject)){
                unsubscribe = unsubscribe.where('projectId','==',selectedProject);
            }
            else if(selectedProject === 'TODAY'){
                unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY'));
            }
            else if (selectedProject === 'INBOX' || selectedProject === 0){
                unsubscribe = unsubscribe.where('date', '==', '');
            }
            
            
    //         // unsubscribe = selectedProject && !collatedTasksExist(selectedProject)
    //         // ? (unsubscribe = unsubscribe.where('projectId','==',selectedProject))
    //         // : selectedProject === 'TODAY'
    //         // ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
    //         // : selectedProject === 'INBOX' || selectedProject === 0 
    //         // ? (unsubscribe = unsubscribe.where('date', '==', ''))
    //         // : unsubscribe ; 
            
            unsubscribe = unsubscribe.onSnapshot(snapshot => {
                const newTasks = snapshot.docs.map(task => {
                    return {
                        id:task.id,
                        ...task.data()
                    }
                });
                setTasks(
                    selectedProject === 'NEXT_7'
                        ?newTasks.filter( task => moment(task.date,'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true)
                        :newTasks.filter( task => task.archived !== true)
                );
                setArchivedTasks(newTasks.filter(task=>task.archived === true));
            });

            //return () => unsubscribe();
        },[ selectedProject ]);

        return {tasks, archivedTasks};
    };
// const selectedProject = 1; 
// const { tasks , archivedTasks } = useTasks(selectedProject);


// custom hook #2
export const useProjects = () => {
    
    const [ projects, setProjects ] = useState([]);
    useEffect(() => {
        
        firebase.firestore().collection('projects').where('userId','==','1234567890').orderBy('projectId').get()
        .then(result => {
            console.log('hooks>> useProjects >>> result: ',result);
            const allProjects = result.docs.map( project => ({
                ...project.date(),
                docId:project.id
            }))
           
            if(JSON.stringify(allProjects) !== JSON.stringify(projects)) {       //just avoiding infinite loop
               setProjects(allProjects);        //age bedoone if faghat hamin setProjects ro benivisim , useEffect inifinte loop ejra mishe.
           }
        });
    },[projects]);

    return { projects, setProjects };             //{ projects : projects, setProjects : setProjects }

}