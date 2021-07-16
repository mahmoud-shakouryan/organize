//import { FaPizzaSlice } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    {/* <img src='./assets/duck.png' alt='schedule'/> */}
                    Schedule icon
                </div>
                <div className='settings'>
                    <ul>
                        <li className='settings__add'>+</li>
                        <li className='settings__darkmode'>pizzaIcon</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Header;