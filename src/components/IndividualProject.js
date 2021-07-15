import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "./context/index";
import { firebase } from "../index"; //chon yeki az karaee ke inja mikhaim anjam bedim delete kardane.
import { useState } from "react";

const IndividualProject = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase;
    fireStore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]); //inja tozih dad ke age tebghe hamin khat , tooye custom hook oon if ro tooye useEffect nazashte boodim bad az hamin khate inja ham dochare infinite loop mishod.
        setSelectedProjects("INBOX");
      });
  };

  return (
    <>
      <span className="sidebar__dot">noghte</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        hello delete me!
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure yiu want ro delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};

export default IndividualProject;
