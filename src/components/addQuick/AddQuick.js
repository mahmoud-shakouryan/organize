import { FaList, FaRegHourglass } from "react-icons/fa";
import TaskDate from  '../TaskDate';
import ProjectOverlay from '../ProjectOverlay';
import moment from "moment";
import { firebase } from "../../firebase";
import { useSelectedProjectValue } from "../context/index";
import { useState } from "react";


const AddQuick = ({ setShowAddQuick }) => {

    const [showMain, setShowMain] = useState(false);                         


    return (
                    <div className='add-quick-wrapper'>
                        <div className='add-quick'>
                        <div className='add-quick__exit' onClick={ () => setShowMain(!showMain)}>&times;</div>
                        <input type='text' className='add-quick__input' placeholder="e.g. do not forget Mary's birthday"/>
                        <div className='add-quick__clickables'>
                            <span className='icon-1-span'><FaList/></span>
                            <span className='icon-2-span'><FaRegHourglass/></span>
                        </div>
                        <div className='buttons'>
                            <button className='submit'>Submit</button>
                            <button className='cancel' onClick={ () => setShowMain(!showMain)}>Cancel</button>
                        </div>
                    </div>
                    </div>
    );
}


export default AddQuick;