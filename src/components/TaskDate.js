import { FaRegCalendarCheck, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';


const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate}) => {

    return (
                showTaskDate && (
                    <div className='taskDateDiv' >
                        <ul className='task-date__list'>
                            <li 
                            onClick={()=>{
                                setShowTaskDate(false);
                                setTaskDate(moment().format('DD/MM/YYYY'));
                            }}
                            >
                                <span className='iconWrapper'>
                                    <FaRegCalendarCheck className='icon'/>
                                </span>
                                <span className='baseProjectName'>Today</span>
                            </li>
                            <li 
                            onClick={()=>{
                                setShowTaskDate(false);
                                setTaskDate(moment().add(1,'day').format('DD/MM/YYYY'));
                            }}
                            >
                                <span className='iconWrapper'>
                                    <FaSun className='icon'/>
                                </span>
                                <span className='baseProjectName'>Tomorrow</span>
                            </li>
                            <li 
                            onClick={()=>{
                                setShowTaskDate(false);
                                setTaskDate(moment().add(7,'days').format('DD/MM/YYYY'));
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
