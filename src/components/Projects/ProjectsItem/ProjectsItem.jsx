import React, { useState } from "react";
import { removeProject } from "../../../redux/actions/projectsActions";
import "./ProjectItem.css";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import EditProject from "../EditProject/EditProject";

function ProjectsItem({ dispatch, project }) {
  const [modalEditPrjctActive, setModalEditPrjctActive] = useState(false);
  const [modalDelPrjctActive, setModalDelPrjctActive] = useState(false);

  const deleteProject = (project) => {
    dispatch(removeProject(project._id));
  };

  return (
    <div className='project'>
      <div className='project__name' link='/boards' projectId={project._id}>{project.name}</div>
      <div className='project__description'>{project.description}</div>

      <div className='project__actions'>
        <Button
          text={"Пользователи проекта"}
          link='/projectusers'
          width={200}
        ></Button>
        <Button
          onClick={() => setModalEditPrjctActive(true)}
          edit={true}
          width={40}
        ></Button>
        <Button
          onClick={() => setModalDelPrjctActive(true)}
          removal={true}
          width={40}
        ></Button>
      </div>

      <Modal active={modalEditPrjctActive} setActive={setModalEditPrjctActive}>
        <EditProject {...project} />
      </Modal>
      <Modal active={modalDelPrjctActive} setActive={setModalDelPrjctActive}>
        {/* <p>Are you sure you want to delete the project?</p> */}
        <p>Вы уверены, что хотите удалить проект?</p>
        <div className='question__delete__actions'>
          <Button
            type='button'
            //text={"Yes"}
            text={"Да"}
            onClick={() => deleteProject(project)}
            //disabled={true}
          />
          <Button
            type='button'
            //text={"Cancel"}
            text={"Нет"}
            onClick={() => console.log('remove question modal')}
            //disabled={true}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ProjectsItem;
