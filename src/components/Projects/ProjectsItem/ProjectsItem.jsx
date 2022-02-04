import React, { useState } from 'react';
import * as projectActions from '../../../redux/projectReducer';
import './ProjectItem.css';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form';
import InputField from '../../UI/InputField/InputField';
import Button from '../../UI/Button/Button';

function ProjectsItem ({dispatch, project}) {
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
              <Form name={"Edit project"}>
                <InputField
                  // value={value}
                  // onChange={(e) => console.log(e.target.value)}
                  placeholder={project.name}
                  type={"text"}
                />
                <InputField
                  //value={value}
                  //onChange={(e) => console.log(e.target.value)}
                  placeholder={project.description}
                  type={"text"}
                />
                <Button
                  type='button'
                  text={"Save"}
                  //onClick={addProject}
                  disabled={true}
                />
            </Form>
        </Modal>
        <Modal active={modalDelPrjctActive} setActive={setModalDelPrjctActive}>
            <p>Are you sure you want to delete the project?</p>
            <button onClick={() => removeProject(project)}>Yes</button>
        </Modal>
    </div>       
  )
}

export default ProjectsItem;
