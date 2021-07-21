import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';


const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate}) => {
  console.log('TaskDate');

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
                                <span>
                                    <FaSpaceShuttle/>
                                </span>
                                <span>Today</span>
                            </li>
                            <li 
                            onClick={()=>{
                                setShowTaskDate(false);
                                setTaskDate(moment().add(1,'day').format('DD/MM/YYYY'));
                            }}
                            >
                                <span>
                                    <FaSun/>
                                </span>
                                <span>Tomorrow</span>
                            </li>
                            <li 
                            onClick={()=>{
                                setShowTaskDate(false);
                                setTaskDate(moment().add(7,'days').format('DD/MM/YYYY'));
                            }}
                            >
                                <span>
                                    <FaRegPaperPlane/>
                                </span>
                                <span>Next Week</span>
                            </li>
                        </ul>
                    </div>
                )
    );
};



export default TaskDate;
