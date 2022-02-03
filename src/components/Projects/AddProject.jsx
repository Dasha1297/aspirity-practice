import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import * as projectActions from '../../redux/projectReducer';
import { v4 as uuid } from 'uuid';
import InputField from "../UI/InputField/InputField";
import Button from '../UI/Button/Button';


function AddProject () {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const addProject = (name, description, event) => {
    event.preventDefault()

    const project = {
      id: uuid(),
      name,
      description,
   }
   dispatch(projectActions.addProjectAction(project))
   
  }

  return (
      <Form name={"New project"}>
          <InputField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Project name"}
            type={"text"}
          />
          <InputField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={"Description"}
            type={"text"}
          />
          <Button
            type='button'
            text={"Save"}
            disabled={
              name === "" || description === "" 
            }
            onClick={addProject}
          />
          {/* <button onClick={() => addProject(name, description)}>Save</button> */}
      </Form>
    
  )
}

export default AddProject;



