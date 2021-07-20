import { FaSun, FaMoon, FaTasks } from 'react-icons/fa';
import { useState } from "react";
import AddTask from '../AddTask';   

const Header = ({ darkMode, setDarkMode }) => {

        const [shouldShowMain, setShouldShowMain] = useState(false);
        const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    
    
        return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <FaTasks/>
                </div>
                <div className='settings'>
                    <ul>
                        <li 
                        className='settings__add'
                        onClick={ () => {
                            setShowQuickAddTask(true);
                            setShouldShowMain(true);
                          }}
                          title='Add Quick Task'
                        >
                            +
                        </li>
                        <li className='settings__darkmode' onClick={()=>setDarkMode(!darkMode)} title='Darkmode'>{darkMode ? <FaMoon/>:<FaSun/>}</li>
                    </ul>
                </div>
            </nav>
            <AddTask showAddTaskMain={false} shouldShowMain={shouldShowMain} showQuickAddTask={showQuickAddTask} setShowQuickAddTask={setShowQuickAddTask}/>
        </header>
    );
}


export default Header;