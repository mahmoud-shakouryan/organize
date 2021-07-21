import {firebase} from "../firebase";
//import { generatePushId } from "./helpers/index";
import { useProjectsValue } from "./context/projects-context";
import { useState } from "react";

const AddProject = () => {
  const [show, setShow] = useState(false);         //show
  const [projectName, setProjectName] = useState("");   //projectName
  const { projects, setProjects } = useProjectsValue();        
  const projectId = Math.random() * 100;

  const addProject = () => {                         // too kolle application add kardan be db hamin injast faghat
    console.log('AddProject')
    if (projectName) {
     return firebase
        .firestore()
        .collection("projects") //return nemikhad?
        .add({
          projectId : projectId,
          name: projectName,
          useId: '1234567890',
        })
        .then(() => {
           setProjects([...projects]);                                    //? chera elzaman bayad inkar ro bokone?
          setProjectName("");
          setShow(false);
        })
        .catch(err=>{
          console.log('AddProject >>> addProject Error',err);
        })
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
