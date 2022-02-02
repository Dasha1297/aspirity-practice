import * as projectActions from '/home/tatyana/studies-projects/aspirity-practice/src/redux/projectReducer';
import './ProjectItem.css';

function ProjectsItem ({dispatch, project}) {

  const removeProject = (project) => {
    dispatch(projectActions.removeProjectAction(project.id))
  }

  return (
    <div className='projectItem'>
      <div className='projectName'>{project.name}</div>
      <div className='projectDescription'>{project.description}</div>
      <button className='editBtn'>ET</button>        
      <button className='delBtn' onClick={() => removeProject(project)}>RM</button>
    </div>                          
  )
}

export default ProjectsItem;