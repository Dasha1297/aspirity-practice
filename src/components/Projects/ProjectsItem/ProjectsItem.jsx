import React, { useState } from "react";
import * as projectActions from "../../../redux/reducers/projectReducer";
import "./ProjectItem.css";
import Modal from "../../Modal/Modal";

function ProjectsItem({ dispatch, project }) {
  const [modalEditPrjctActive, setModalEditPrjctActive] = useState(false);
  const [modalDelPrjctActive, setModalDelPrjctActive] = useState(false);

  const removeProject = (project) => {
    dispatch(projectActions.removeProjectAction(project.id));
  };

  return (
    <div className='project'>
      <div className='project__name'>{project.name}</div>
      <div className='project__description'>{project.description}</div>
      <div className='project__actions'>
        <button onClick={() => setModalEditPrjctActive(true)}>ET</button>
        <button onClick={() => setModalDelPrjctActive(true)}>RM</button>
      </div>

      <Modal active={modalEditPrjctActive} setActive={setModalEditPrjctActive}>
        <form>
          <input placeholder={project.name} />
          <input placeholder={project.description} />
          <button disabled={true}>Save</button>
        </form>
      </Modal>
      <Modal active={modalDelPrjctActive} setActive={setModalDelPrjctActive}>
        <p>Are you sure you want to delete the project?</p>
        <button onClick={() => removeProject(project)}>Yes</button>
      </Modal>
    </div>
  );
}

export default ProjectsItem;
