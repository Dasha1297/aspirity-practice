import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as projectActions from '/home/tatyana/studies-projects/aspirity-practice/src/redux/projectReducer';
import './Projects.css'
import { v4 as uuid } from 'uuid';
import ProjectItem from './ProjectsItem/ProjectsItem';

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

  return (
      <div>
        <div>
          <button className='addBtn' onClick={() => addProject(prompt('Project name'), prompt('Description'))}>Add project</button>
        </div>
        <div>
          {projects.map(project => 
            <ProjectItem dispatch={dispatch} project={project}/>
          )}
        </div>
      </div>
  );
}

export default Projects;

