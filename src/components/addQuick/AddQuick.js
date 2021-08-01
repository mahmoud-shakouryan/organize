import { FaList, FaRegHourglass } from "react-icons/fa";
import QuickProjectOverlay from '../quickProjectOverlay/QuickProjectOverlay';
import QuickTaskDate from '../quickTaskDate/QuickTaskDate';
import moment from "moment";
import { firebase } from "../../firebase";
import { useSelectedProjectValue } from "../context/index";
import { useState } from "react";


const AddQuick = ({ showAddQuick,  setShowAddQuick }) => {

    const [task, setTask] = useState('');     
    const [showQuickTaskDate, setShowQuickTaskDate] = useState(false);           //baraye <QuickTaskDate/>
    const [quickTaskDate, setQuickTaskDate] = useState(false);                //baraye <QuickTaskDate/>
    const [quickProject, setQuickProject] = useState(false);                       //baraye <QuickProjectOverlay/>        
    const [showQuickProjectOverlay, setShowQuickProjectOverlay] = useState(false);       //baraye <QuickProjectOverlay/>
    const { selectedProject } = useSelectedProjectValue();                    
    
    

    const addTask = () => {
        const projectId = quickProject || selectedProject;        //project az component child miad
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
                date:collatedDate || quickTaskDate,
                userId:'1234567890'
            })
            .then(()=>{            // then reset everything
                setTask('');
                setQuickProject('');
                setShowQuickProjectOverlay(false);
            })
            .catch(err => console.log(err));
        }
    }


    return (
                    showAddQuick && (
                        <div className='add-quick-wrapper'>
                        <div className='add-quick'>
                        <div className='add-quick__exit' onClick={ () => {
                            setShowAddQuick(!showAddQuick);
                            setShowQuickTaskDate(false);
                            }}>&times;</div>
                        <input type='text' value={task} onChange={e=>setTask(e.target.value)} className='add-quick__input' placeholder="e.g. do not forget Mary's birthday"/>
                        <div className='add-quick__clickables'>
                            <span className='icon-1-span' onClick={ () => setShowQuickProjectOverlay(!showQuickProjectOverlay)}><FaList/></span>
                            <span className='icon-2-span' onClick={ () => setShowQuickTaskDate(!showQuickTaskDate)}><FaRegHourglass/></span>
                        </div>
                        <QuickTaskDate setQuickTaskDate={setQuickTaskDate} showQuickTaskDate={showQuickTaskDate} setShowQuickTaskDate={setShowQuickTaskDate}/>
                        <QuickProjectOverlay setQuickProject={setQuickProject} showQuickProjectOverlay={showQuickProjectOverlay} setShowQuickProjectOverlay={setShowQuickProjectOverlay}/>
                        <div className='buttons'>
                            <button className='submit'>Add Task</button>
                            <button className='cancel' onClick={ () => setShowAddQuick(!showAddQuick)}>Cancel</button>
                        </div>
                    </div>
                    </div>
                    )
    );
}


export default AddQuick;