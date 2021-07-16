import { FaPizzaSlice } from 'react-icons/fa';
import { useState } from "react";
import AddTask from '../AddTask';   

const Header = ({ darkMode, setDarkMode }) => {

        const [shouldShowMain, setShouldShowMain] = useState(false);
        const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    
    
        return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <img src='./assets/duck.png' alt='schedule'/>
                </div>
                <div className='settings'>
                    <ul>
                        <li 
                        className='settings__add'
                        >
                          <button type='button'
                          onClick={ () => {
                            setShowQuickAddTask(true);
                            setShouldShowMain(true);

                         }} 
                        onKeyDown={ () => {
                            setShowQuickAddTask(true);
                            setShouldShowMain(true);
                            
                        }}
                          >
                            +
                            </button> 
                        </li>
                        <li className='settings__darkmode'><button type='button'  onClick={()=>setDarkMode(!darkMode)} onKeyDown={()=>setDarkMode(!darkMode)}><FaPizzaSlice/></button></li>
                    </ul>
                </div>
            </nav>
            <AddTask showAddTaskMain={false} shouldShowMain={shouldShowMain} showQuickAddTask={showQuickAddTask} setShowQuickAddTask={setShowQuickAddTask}/>
        </header>
    );
}


export default Header;