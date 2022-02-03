import { useSelector } from 'react-redux';

function ProjectsSelector() {

  const projects = useSelector(state => state.projects)

  return (
    <select name="All projects">
      <option>All project</option>
      {projects.map(project => <option key={project.id}>{project.name}</option>)}
    </select>
  );
} 

export default ProjectsSelector;