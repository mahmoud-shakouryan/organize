import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
import { useState } from "react";
import { useSelectedProjectValue } from "../context/index";
import Projects from "../Projects";
import AddProject from "../AddProject";



const Sidebar = () => {

  const [active, setActive] = useState("inbox");               //chon selectedProject initial'esh 'INBOX' e, app load ke mishe to sidebae inbox active shode.
  const [showProjects, setShowProjects] = useState(true);
  const { setSelectedProject } = useSelectedProjectValue();

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
          <span><FaInbox/></span>
          <span>inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span><FaRegCalendar/></span>
          <span>today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
        >
          <span><FaRegCalendarAlt/></span>
          <span>next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle" onClick={ () => setShowProjects(!showProjects)}>
        <span><FaChevronDown className={!showProjects ? 'hidden-projects' : undefined} /></span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};

export default Sidebar;
