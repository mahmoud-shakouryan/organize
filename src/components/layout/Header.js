//import { FaPizzaSlice } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='header' data-testid='header'>
            <nav>
                <div className='logo'>
                    {/* <img src='./assets/duck.png' alt='schedule'/> */}
                    Schedule icon
                </div>
                <div className='settings'>
                    <ul>
                        <li className='settings__add' data-testid='quick-add-task-action'>+</li>
                        <li className='settings__darkmode' data-testid='dark-mode-action'>pizzaIcon</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Header;