import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
import { useState } from "react";
import AddProject from "../AddProject";
import { useSelectedProjectValue } from "../context/index";
import Projects from "../Projects";

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
          data-testid="inbox"
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
          data-testid="today"
        >
          <span><FaRegCalendar/></span>
          <span>today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("TODAY");
          }}
          data-testid="next_7"
        >
          <span><FaRegCalendarAlt/></span>
          <span>next 7 days</span>
        </li>
      </ul>

      <div className="sideabr__middle" onClick={ () => setShowProjects(!showProjects)}>
        <span><FaChevronDown className={!showProjects ? 'hidden-projects' : undefined} /></span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};

export default Sidebar;
