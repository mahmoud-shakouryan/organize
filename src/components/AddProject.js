import firebase from "../firebase";
import { generatePushId } from "./helpers/index";
import { useProjectsValue } from "./context/projects-context";
import { useState } from "react";

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow); //show
  const [projectName, setProjectName] = useState(""); //projectName
  const { setProjects } = useProjectsValue();
  const projectId = generatePushId();

  const addProject = () => {
    if (projectName) {
      firebase
        .fireStore()
        .collection("projects") //return nemikhad?
        .add({
          projectId,
          name: projectName,
          useId: 'az too firebase user"e khodam',
        })
        .then(() => {
          setProjects([]);
          setProjectName("");
          setShow(false);
        });
    }
  };

  let add_project = null;
  if (show) {
    add_project = (
      <div className="add-project__input">
        <input
          type="text"
          className="add-project__name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Name Of your Project"
        />
        <button
          className="add-project__submit"
          type="button"
          onClick={addProject} // khodesh intori nevesht tooye onclick ro : () => addProject()
        >
          Add Project
        </button>
        <span className="add-project__cancel" onClick={() => setShow(false)}>
          Cancel
        </span>
      </div>
    );
  }

  return (
    <div className="add-project">
      {add_project}
      <span className="add-project__plus">+</span>
      <span className="add-project__text" onClick={() => setShow(!show)}>
        Add Project
      </span>
    </div>
  );
};

export default AddProject;
