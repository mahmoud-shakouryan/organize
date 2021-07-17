import {firebase} from "../firebase";
//import { generatePushId } from "./helpers/index";
import { useProjectsValue } from "./context/projects-context";
import { useState } from "react";

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);         //show
  const [projectName, setProjectName] = useState("");   //projectName
  const { projects, setProjects } = useProjectsValue();        
  //const projectId = generatePushId();

  const addProject = () => {                         // too kolle application add kardan be db hamin injast faghat
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
          setProjects([...projects]);                                    //? chera elzaman bayad inkar ro bokone?
          setProjectName("");
          setShow(false);
        });
    }
  };

  let add_project = null;
  if (show) {                             // show boodane oon kadre add project'e sidebar. yani samte chap oon paeen roosh click "shode"
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
        <span className="add-project__cancel" onClick={() => setShow(false)} onKeyDown={() => setShow(false)} role='button' tabIndex={0}>
          Cancel
        </span>
      </div>
    );
  }

  return (
    <div className="add-project">
      {add_project}
      <span className="add-project__plus">+</span>
      <span className="add-project__text" onClick={() => setShow(!show)} onKeyDown={() => setShow(!show)} role='button' tabIndex={0}>
        Add Project
      </span>
    </div>
  );
};

export default AddProject;
