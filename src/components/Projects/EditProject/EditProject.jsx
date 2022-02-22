import React, { useState } from 'react';
import { updateProjects } from '../../../redux/actions/projectsActions';
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
        name: editedProjectName,
        description: editedProjectDescription,
    }
    dispatch(updateProjects(project._id, editedProject));
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
    <Form>
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
          disabled={editedProjectName === "" || editedProjectDescription === ""}
          //disabled={true}
        />
        <Button
          type='button'
          //text={"Cancle"}
          text={"Исходное значение"}
          onClick={cancelUpdate}
          //disabled={true}
        />
      </div>
      
    </Form>
  )
}

export default EditProject; 