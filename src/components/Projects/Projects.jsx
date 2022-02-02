import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as projectActions from '/home/tatyana/studies-projects/aspirity-practice/src/redux/projectReducer';
import './Projects.css'
import { v4 as uuid } from 'uuid';

function Projects() {

  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)

  const addProject = (name, description) => {
    const project = {
      id: uuid(),
      name,
      description,
   }
   dispatch(projectActions.addProjectAction(project))
 }

  const removeProject = (project) => {
    dispatch(projectActions.removeProjectAction(project.id))
  }

  return (
      <div>
        <div>
          <button className='addBtn' onClick={() => addProject(prompt('Project name'), prompt('Description'))}>Add project</button>
        </div>
        <div>
          <hr />
          {projects.map(project => 
            <div key={project.id} className='projectItem'>
              <div className='projectName'>{project.name}</div>
              <div className='projectDescription'>{project.description}</div>
              <button className='editBtn'>ET</button>
              <button className='delBtn' onClick={() => removeProject(project)}>RM</button>
            </div>
          )}
        </div>
      </div>
  );
}

export default Projects;

