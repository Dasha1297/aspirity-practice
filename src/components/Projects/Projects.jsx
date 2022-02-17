import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Projects.css";
import AddProject from "./AddProject";
import Modal from "../Modal/Modal";
import ProjectItem from "./ProjectsItem/ProjectsItem";
import ProjectsSelector from "../ProjectsSelector/ProjectsSelector";
import Button from "../UI/Button/Button";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);

  const [modalAddProjectActive, setModalAddProjectActive] = useState(false);

  return (
    <div className='wrapper'>
      <div style={{ margin: "20px 20px" }}>
        <ProjectsSelector />
      </div>
      <div className='add__button'>
        <Button
          onClick={() => setModalAddProjectActive(true)}
          //text={"Add new project"}
          text={"Добавить новый проект"}
          width={250}
        ></Button>
      </div>
      <Modal
        active={modalAddProjectActive}
        setActive={setModalAddProjectActive}
      >
        <AddProject />
      </Modal>
      <div>                      
        {projects.map((project) => (
          <ProjectItem key={project.id} dispatch={dispatch} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
