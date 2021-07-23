import { FaTrashAlt, FaCircle } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "./context/index";
import { firebase } from "../firebase"; //chon yeki az karaee ke inja mikhaim anjam bedim delete kardane.
import { useState } from "react";

const IndividualProject = ({project}) => {

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);             
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    console.log(projects)
    firebase.firestore().collection("projects").doc(docId).delete()
      .then(() => {
        console.log('deleting succeeded')
        setSelectedProject('INBOX')
        firebase.firestore().collection('projects').where('userId','==','1234567890').orderBy('projectId').get()
        .then(result => {
        console.log('accessing db succeeded')
          const projects = result.docs.map(project=>{
            
            console.log('...project.data()',{...project.data()})
            return ({
              ...project.data()
            });
          });
          setProjects(projects);
          setSelectedProject('INBOX');
        })
      })
      .catch(err => console.log('deleteProject error',err));
    };
    
 
   
  return (
    <div className='singleProject'>
      <div className='dotAndName'>
      <span className="sidebar__dot"><FaCircle className='icon'/></span>
      <span className="sidebar__project-name">{project.name}</span>
      </div>
      
        <span
        className={'sidebar__project-delete'}
      >
        <FaTrashAlt onClick={(e) => {
            e.stopPropagation();
           setShowDeleteConfirm(!showDeleteConfirm);
           
          }}/> 
        {showDeleteConfirm && (
          <div className={"project-delete-modal"}>
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <div className='buttons'>
              <button
                type="button"
                onClick={() => {
                  deleteProject(project.docId);
                }}
              >
                Delete
              </button>
              <span onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}>Cancel</span>
              </div>
            </div>
          </div>
        )}
      </span>
    </div>
  );
};

export default IndividualProject;
