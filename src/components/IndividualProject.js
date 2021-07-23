import { FaTrashAlt, FaCircle } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue, useDeleteModalValue } from "./context/index";
import { firebase } from "../firebase"; //chon yeki az karaee ke inja mikhaim anjam bedim delete kardane.
import { useState } from "react";

const IndividualProject = ({project}) => {

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);             
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();
  const { deleteModal, setDeleteModal } = useDeleteModalValue();

  const deleteProject = (docId) => {
            firebase.firestore().collection('projects').doc(docId).delete()
            .then(()=>{
              const updatedProjects = projects.filter(project => project.docId !== docId);
            setSelectedProject('INBOX');
            setProjects([...updatedProjects]);
            })
          }
   
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
          setShowDeleteConfirm(!showDeleteConfirm);
          setDeleteModal(!deleteModal);
          e.stopPropagation();
          
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
              <button className='cancel' onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </span>
    </div>
  );
};

export default IndividualProject;
