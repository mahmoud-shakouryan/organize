import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
import { useState } from "react";
import { useSelectedProjectValue } from "../context/index";
import Projects from "../Projects";
import AddProject from "../AddProject";
import { useLoadingContextValue } from '../context/loading-context';
import Spinner from '../spinner/Spinner';
import { useSidebarShowValue } from '../context/index';  



const Sidebar = () => {

  const [active, setActive] = useState("inbox");               //chon selectedProject initial'esh 'INBOX' e, app load ke mishe to sidebae inbox active shode.
  const [showProjects, setShowProjects] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();
  const { isLoading } = useLoadingContextValue();
  const { sidebarShow, setSidebarShow } = useSidebarShowValue();


  return (
    <div className={sidebarShow ? 'sidebar opened' : 'sidebar'}>
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
        >
          <span className='iconSpan'><FaInbox className='theIcon'/></span>
          <span className='iconNameSpan'>inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span className='iconSpan'><FaRegCalendar className='theIcon'/></span>
          <span className='iconNameSpan'>today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
        >
          <span className='iconSpan'><FaRegCalendarAlt className='theIcon'/></span>
          <span className='iconNameSpan'>next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle" onClick={ () => setShowProjects(!showProjects)}>  
        <div>
        <span><FaChevronDown className={!showProjects ? 'hiddenProjects arrowAnimate':'hiddenProjects '} /></span>
        <h2>Projects</h2>
        </div>

      </div>
      <ul className="sidebar__projects">{showProjects ? <Projects /> : null}</ul>
      {showProjects && !isLoading ? <AddProject/> : showProjects && isLoading ? <div className='spinnerWrapper'><Spinner /> </div>: <AddProject/>}
      
    </div>
  );
};

export default Sidebar;
