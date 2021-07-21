import Sidebar from './Sidebar';
import Tasks from '../Tasks';


const Content = () => {
    console.log('Content')
    return (
        <section className='content'>
            <Sidebar/>
            <Tasks/>
        </section>
    );
}


export default Content;