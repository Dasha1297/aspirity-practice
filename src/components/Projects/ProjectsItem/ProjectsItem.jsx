import React, { useState } from "react";
import { removeProject } from "../../../redux/actions/projectsActions";
import "./ProjectItem.css";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import EditProject from "../EditProject/EditProject";
import { NavLink } from "react-router-dom";

function ProjectsItem({ dispatch, project }) {
  const [modalEditPrjctActive, setModalEditPrjctActive] = useState(false);
  const [modalDelPrjctActive, setModalDelPrjctActive] = useState(false);

  const deleteProject = (project) => {
    dispatch(removeProject(project._id));
  };

  return (
    <div className='project'>
      <NavLink to={`/boards/${project._id}`}>
        <div className='project__name'>{project.name}</div>
      </NavLink>
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
        <p style={{margin: '15px'}}>Вы уверены, что хотите удалить проект?</p>
        <div className='question__delete__actions'>
          <Button
            type='button'
            width={90}
            //text={"Yes"}
            text={"Дa"}
            onClick={() => deleteProject(project)}
            //disabled={true}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ProjectsItem;
