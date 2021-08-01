import { FaSun, FaMoon, FaTasks } from 'react-icons/fa';
import { useState } from "react";
import { useSidebarShowValue } from '../context/index';  
import AddQuick from '../addQuick/AddQuick';

const Header = ({ darkMode, setDarkMode }) => {


        const [showAddQuick, setShowAddQuick] = useState(false);
        const { sidebarShow, setSidebarShow } = useSidebarShowValue();
        console.log(sidebarShow)
        return (
        <header className='header'>
            <nav>
                <div className='logo' onClick={ () => setSidebarShow(!sidebarShow) } >
                    <FaTasks/> 
                </div>
                <div className='settings'>
                    <ul>
                        <li 
                        className='settings__add'
                        onClick={ () => {
                            setShowAddQuick(!showAddQuick);
                          }}
                          title='Add Quick Task'
                        >
                            +
                        </li>
                        <li className='settings__darkmode' onClick={()=>setDarkMode(!darkMode)} title='Darkmode'>{darkMode ? <FaMoon/>:<FaSun/>}</li>
                    </ul>
                </div>
            </nav>
            <AddQuick showAddQuick={showAddQuick} setShowAddQuick={setShowAddQuick}/>
        </header>
    );
}


export default Header;