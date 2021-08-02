import { FaListUl, FaRegHourglass } from "react-icons/fa";
import moment from "moment";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "./context/index";
import { useState } from "react";
import ProjectOverlay from './ProjectOverlay';
import TaskDate from  './TaskDate';


const AddTask = ( ) => { 
    
        const [showMain, setShowMain] = useState(false);                         
        const [task, setTask] = useState('');                                           // task
        const [taskDate, setTaskDate] = useState('');                            //baraye <TaskDate/>
        const [showTaskDate, setShowTaskDate] = useState(false);                 //baraye <TaskDate/>
        const [project, setProject] = useState('');                               //baraye <ProjectOverlsay/>
        const [showProjectOverlay, setShowProjectOverlay] = useState(false);      //baraye <ProjectOverlsay/>
 
        const { selectedProject } = useSelectedProjectValue();                    
        

        const addTask = () => {
            const projectId = project || selectedProject;        //project az component child miad
            let collatedDate = '';
            if(projectId === 'TODAY'){  //serfan hesab kardane tarikh too in ghesmat      // too site oon bala smate chap 3ta gozine hast inbox today next_7
                collatedDate = moment().format('DD/MM/YYYY');
            }
            else if(projectId === 'NEXT_7'){
                collatedDate = moment().add(7,'days').format('DD/MM/YYYY');
            }

            if(task && projectId){

                firebase.firestore().collection('tasks')
                .add({
                    archived:false,
                    projectId:projectId,
                    task:task,
                    date:collatedDate || taskDate,
                    userId:'1234567890'
                })
                .then(()=>{            // then reset everything
                    setTask('');
                    setProject('');
                    setShowMain('');
                    setShowProjectOverlay(false);
                })
                .catch(err => console.log(err));
            }
        }





    return (
                    <div className='add-task'>
                       
                            <div className='add-task__shallow' onClick={ () => setShowMain(!showMain)}>     
                                <span className='add-task__shallow__plus'>+</span>
                                <span className='add-task__shallow__text'>Add Task</span>
                            </div>
                       
                        
                        {showMain && (
                            <div className='add-task__main'>
                                <ProjectOverlay setProject={setProject} showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay} />
                                <TaskDate setTaskDate={setTaskDate} showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate}/>
                                <input
                                className='add-task__content'
                                type='text'
                                value={task}
                                onChange={ e => setTask(e.target.value)}
                                placeholder='write your task here ...'
                                />
                                <button 
                                type='button'
                                className='add-task__submit'
                                onClick={() => addTask() }
                                >
                                    Add Task
                                </button>
                                    <button 
                                    className='add-task__cancel'
                                    onClick={()=>{
                                        setShowMain(false);
                                        setShowProjectOverlay(false);
                                    }}
                                    >
                                        Cancel
                                    </button>
                                <div className='iconsWrapper'>
                                <span                             // clickables ( oon iconhaye rize oon paeene kadr samte rast)
                                className='add-task__project'
                                onClick={ () => setShowProjectOverlay(!showProjectOverlay)}
                                   >
                                    <FaListUl className='icon' />
                                </span>
                                <span                             // clickables ( oon iconhaye rize oon paeene kadr samte rast)
                                className='add-task__date'
                                onClick={ () => setShowTaskDate(!showTaskDate)}
                                   >
                                    <FaRegHourglass className='icon'/>
                                </span>  
                                </div>
                            </div>
                        )}
                    </div>
    );
};

export default AddTask;
