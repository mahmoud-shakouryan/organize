import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
import { useState } from "react";
import { useSelectedProjectValue } from "../context/index";
import Projects from "../Projects";
import AddProject from "../AddProject";
import { useLoadingContextValue } from '../context/loading-context';
import Spinner from '../spinner/Spinner';


const Sidebar = () => {

  const [active, setActive] = useState("inbox");               //chon selectedProject initial'esh 'INBOX' e, app load ke mishe to sidebae inbox active shode.
  const [showProjects, setShowProjects] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();
  const { isLoading } = useLoadingContextValue();
  console.log('Sidebar.js >>> isLoading',isLoading)
  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
        >
          <span className='iconSpan'><FaInbox/></span>
          <span className='iconNameSpan'>inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span className='iconSpan'><FaRegCalendar/></span>
          <span className='iconNameSpan'>today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
        >
          <span className='iconSpan'><FaRegCalendarAlt/></span>
          <span className='iconNameSpan'>next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle" onClick={ () => setShowProjects(!showProjects)}>  
        <div>
        <span><FaChevronDown className={!showProjects ? 'hiddenProjects arrowAnimate':'hiddenProjects '} /></span>
        <h2>Projects</h2>
        </div>

      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && !isLoading ? <AddProject /> : showProjects && isLoading ? <div className='spinnerWrapper'><Spinner /> </div>: <AddProject/>}
      
    </div>
  );
};

export default Sidebar;
