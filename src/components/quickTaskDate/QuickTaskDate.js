import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';


const TaskDate = ({ setQuickTaskDate, showQuickTaskDate, setShowQuickTaskDate}) => {

    return (
                showQuickTaskDate && (
                    <div className='quickTaskDate' >
                        
                        <ul className='quickTaskDate__list'>
                            <li 
                            onClick={()=>{
                                setShowQuickTaskDate(false);
                                setQuickTaskDate(moment().format('DD/MM/YYYY'));
                            }}
                            >
                                <span className='iconWrapper'>
                                    <FaSpaceShuttle className='icon'/>
                                </span>
                                <span className='baseProjectName'>Today</span>
                            </li>
                            <li 
                            onClick={()=>{
                                setShowQuickTaskDate(false);
                                setQuickTaskDate(moment().add(1,'day').format('DD/MM/YYYY'));
                            }}
                            >
                                <span className='iconWrapper'>
                                    <FaSun className='icon'/>
                                </span>
                                <span className='baseProjectName'>Tomorrow</span>
                            </li>
                            <li 
                            onClick={()=>{
                                setShowQuickTaskDate(false);
                                setQuickTaskDate(moment().add(7,'days').format('DD/MM/YYYY'));
                            }}
                            >
                                <span className='iconWrapper'>
                                    <FaRegPaperPlane className='icon'/>
                                </span>
                                <span className='baseProjectName'>Next Week</span>
                            </li>
                        </ul>
                    </div>
                )
    );
};



export default TaskDate;