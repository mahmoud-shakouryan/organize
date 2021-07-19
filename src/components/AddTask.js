import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "./context/index";
import { useState } from "react";
import ProjectOverlay from './ProjectOverlay';
import TaskDate from  './TaskDate';


const AddTask = ({ showAddTaskMain = true, shouldShowMain = false, showQuickAddTask, setShowQuickAddTask }) => { 
    //showAddTaskMain>> too site oonja ke roo add task click mikonim ye kadri miad ke mishe nevesht ba detail'e kamel.showAddTaskMain true bashe yani oon oomade.
    //showQuickAddTask >> too site oon bala ye gozine dare baraye neveshtane sari. ke age showQuickAddTask true bashe yani oon click shode.

        
    
    
    
    const [task, setTask] = useState('');                                           // task
        const [taskDate, setTaskDate] = useState('');                            //taskDate
        const [project, setProject] = useState('');                               //project
        const [showMain, setShowMain] = useState(shouldShowMain);                //showMain   (boolean)  >>> kadre add taske asli ooomade biroon (click kardim rooye add taske asli)
        const [showProjectOverlay, setShowProjectOverlay] = useState(false);   //showProjectOveraly (boolean)
        const [showTaskDate, setShowTaskDate] = useState(false);               //showTaskDate      (boolean)

        const { selectedProject } = useSelectedProjectValue();                // selectedProject    (context)
        

        const addTask = () => {
            const projectId = project || selectedProject;
            let collatedDate = '';
            if(projectId === 'TODAY'){  //serfan hesab kardane tarikh too in ghesmat      // too site oon bala smate chap 3ta gozine hast inbox today next_7
                collatedDate = moment().format('DD/MM/YYYY');
            }
            else if(projectId === 'NEXT_7'){
                collatedDate = moment().add(7,'days').format('DD/MM/YYYY');
            }

            if(task && projectId){
                return ( 
                firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived:false,
                    projectId:projectId,
                    task:task,
                    date:collatedDate || taskDate,
                    userId:'felan'
                }))
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
                    <div className={ showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}>
                       
                        { showAddTaskMain && (
                            <div className='add-task__shallow' onClick={ () => setShowMain(!showMain)}>
                                <span className='add-task__plus'>+</span>
                                <span className='add-task__text'>Add Task</span>
                            </div>
                        )}
                        
                        {(showMain || showQuickAddTask) && (
                            <div className='add-task__main'>
                            {showQuickAddTask && (
                                <>
                                    <div>
                                        <h2 className='header'>Quick Add</h2>
                                        <span 
                                        className='add-task__cancel-x'
                                        onClick={()=>{
                                            setShowMain(false);
                                            setShowProjectOverlay(false);
                                            setShowQuickAddTask(false);
                                        }}
                                        >
                                            X
                                        </span>
                                    </div>
                                </>
                            )}
                                <ProjectOverlay setProject={setProject} showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay} />
                                <TaskDate setTaskDate={setTaskDate} showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate}/>
                                <input
                                className='add-task__content'
                                type='text'
                                value={task}
                                onChange={ e => setTask(e.target.value)}
                                />
                                <button 
                                type='button'
                                className='add-task__submit'
                                onClick={()=>{showQuickAddTask ? addTask() && setShowQuickAddTask(false) : addTask()}}
                                >
                                    Add Task
                                </button>
                                {!showQuickAddTask && (
                                    <span 
                                    className='add-task__cancel'
                                    onClick={()=>{
                                        setShowMain(false);
                                        setShowProjectOverlay(false);
                                    }}
                                    >
                                        Cancel
                                    </span>
                                )}
                                <span                             // clickables ( oon iconhaye rize oon paeene kadr samte rast)
                                className='add-task__project'
                                onClick={ () => setShowProjectOverlay(!showProjectOverlay)}
                                   >
                                    <FaRegListAlt/>
                                </span> 
                                <span                             // clickables ( oon iconhaye rize oon paeene kadr samte rast)
                                className='add-task__date'
                                onClick={ () => setShowTaskDate(!showTaskDate)}
                                   >
                                    <FaRegCalendarAlt/>
                                </span> 
                            </div>
                        )}
                    </div>
    );
};

export default AddTask;
