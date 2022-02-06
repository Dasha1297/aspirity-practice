import React, { useState } from "react";
import * as projectActions from "../../../redux/projectReducer";
import "./ProjectItem.css";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import EditProject from "../EditProject";

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
        <EditProject {...project} />
      </Modal>
      <Modal active={modalDelPrjctActive} setActive={setModalDelPrjctActive}>
        <p>Are you sure you want to delete the project?</p>
        <Button
          type='button'
          text={"Yes"}
          onClick={() => removeProject(project)}
          //disabled={true}
        />
      </Modal>
    </div>
  );
}

export default ProjectsItem;
