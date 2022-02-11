import React, { useState } from 'react';
import * as projectActions from '../../../redux/projectReducer';
//import { v4 as uuid } from 'uuid';
import Form from '../../Form/Form';
import InputField from '../../UI/InputField/InputField';
import Button from '../../UI/Button/Button';
import './EditProject.css';
import { useDispatch } from 'react-redux';

function EditProject ({...project}) {

  const [editedProjectName, setProjectName] = useState(project.name)
  const [editedProjectDescription, setProjectDescription] = useState(project.description)
  const dispatch = useDispatch()

  const updateProject = (event) => {
    event.preventDefault()
  
    const editedProject = {
        id: project.id,
        name: editedProjectName,
        description: editedProjectDescription,
    }
    dispatch(projectActions.editProjectAction(project.id, editedProject));
    setProjectName('')
    setProjectDescription('')
  };

  const cancelUpdate = (event) => {
    event.preventDefault()
    setProjectName(project.name)
    setProjectDescription(project.description)

    console.log('remove question modal');
  }

  return (
    <Form name={"Редактировать проект"}>
      <InputField
        value={editedProjectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder={editedProjectName}
        type={"text"}
      />
      <InputField
        value={editedProjectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        placeholder={editedProjectDescription}
        type={"text"}
      />
      <div className='update__actions'>
        <Button
          type='button'
          //text={"Save"}
          text={"Сохранить"}
          onClick={updateProject}
          disabled={true}
        />
        <Button
          type='button'
          //text={"Cancle"}
          text={"Отмена"}
          onClick={cancelUpdate}
          //disabled={true}
        />
      </div>
      
    </Form>
  )
}

export default EditProject; 