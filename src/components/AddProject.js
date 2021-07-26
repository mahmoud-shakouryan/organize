import { firebase } from "../firebase";
//import { generatePushId } from "./helpers/index";
import { useProjectsValue } from "./context/projects-context";
import { useLoadingContextValue } from "./context/index";
import { useState } from "react";

const AddProject = ({ activeAdd, setActiveAdd }) => {
  const [show, setShow] = useState(false); //show
  const [projectName, setProjectName] = useState(""); //projectName
  const { projects, setProjects } = useProjectsValue();
  const { isLoading, setIsLoading } = useLoadingContextValue();
  const projectId = Math.random() * 100;

  const addProject = () => {
    // too kolle application add kardan be db hamin injast faghat
    if (projectName) {
      setIsLoading(!isLoading);
      const newProject = {
        projectId: projectId,
        name: projectName,
        userId: "1234567890",
      };
      firebase
        .firestore()
        .collection("projects")
        .add(newProject)
        .then(() => {
          setIsLoading((prevState) => !prevState);
          setProjects([...projects, newProject]); //? chera elzaman bayad inkar ro bokone?
          setProjectName("");
          setShow(false);
        })
        .catch((err) => {
          console.log("AddProject >>> addProject Error", err);
        });
    }
  };

  let add_project = null;
  if (show) {
    // show boodane oon kadre add project'e sidebar. yani samte chap oon paeen roosh click "shode"
    add_project = (
      <div className="add-project__input">
        <div className='inputWrapper'>
        <input
          type="text"
          className="add-project__name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Name Of your Project"
          required
        />
        </div>
        <div className='add-cancel-wrapper'>
        <button
          className="add-project__submit"
          type="button"
          onClick={addProject} // khodesh intori nevesht tooye onclick ro : () => addProject()
        >
          + 
        </button>
        <span className="add-project__cancel" onClick={() => setShow(false)}>
          &times;
        </span>
        </div>
      </div>
    );
  }

  return (
    <div className="add-project">
      {add_project}
      {!show ? (
        <div className='addWrapper'>
        <span
        className="add-project__plus"
        onClick={() => {
          setShow(!show);
        }}
      >
        +
      </span>
      <span
        className="add-project__text"
        onClick={() => {
          setShow(!show);
        }}
      >
        Add Project
      </span>
      </div>
      ) : null} 
    </div>
  );
};

export default AddProject;
