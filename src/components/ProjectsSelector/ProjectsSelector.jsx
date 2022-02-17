import { useSelector } from "react-redux";
import "./ProjectsSelector.css";

function ProjectsSelector() {
  const projects = useSelector((state) => state.projectReducer.projects);

  return (
    <select name='All projects' className='select'>
      <option>Все проекты</option>
      {projects.map((project) => (
        <option key={project.id ?? project.name}>{project.name}</option>
      ))}
    </select>
  );
}

export default ProjectsSelector;
