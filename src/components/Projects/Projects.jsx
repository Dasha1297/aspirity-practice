import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Projects.css";
import AddProject from "./AddProject";
import Modal from "../Modal/Modal";
import ProjectItem from "./ProjectsItem/ProjectsItem";
//import ProjectsSelector from "../ProjectsSelector/ProjectsSelector";
import Button from "../UI/Button/Button";
import { fetchProjects } from "../../redux/actions/projectsActions";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);


  const [modalAddProjectActive, setModalAddProjectActive] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <h1 style={{ margin: "50px 50px", fontSize: "30px" }}>Все проекты</h1>
      {/* <div style={{ margin: "20px 20px" }}>
        <ProjectsSelector />
      </div> */}
      <div className='add__button'>
        <Button
          onClick={() => setModalAddProjectActive(true)}
          //text={"Add new project"}
          text={"Добавить новый проект"}
          width={250}
        ></Button>
      </div>

      {modalAddProjectActive ? (
      <Modal
        name={"Новый проект"}
        active={modalAddProjectActive}
        setActive={setModalAddProjectActive}
      >
        <AddProject setModalAddProjectActive={setModalAddProjectActive}/>
      </Modal>
      ) : null }
      <div>
        <div className='projects__header'>
          <p>Название</p>
          <p>Описание</p>
        </div>                      
        {projects.map((project) => (
          <ProjectItem key={project._id ?? project.name} dispatch={dispatch} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
