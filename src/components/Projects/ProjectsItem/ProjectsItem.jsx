import React from "react";
/*
Так лучше не делать, это привязка import к конкретному пк, у меня при запуске выдает ошибку
import * as projectActions from '/home/tatyana/studies-projects/aspirity-practice/src/redux/projectReducer';*/
import * as projectActions from "../../../redux/projectReducer";
import "./ProjectItem.css";

function ProjectsItem({ dispatch, project }) {
  const removeProject = (project) => {
    dispatch(projectActions.removeProjectAction(project.id));
  };

  return (
    /*
    <div className='projectItem'>
      <div className='projectName'>{project.name}</div>
      <div className='projectDescription'>{project.description}</div>
      <button className='editBtn'>ET</button>
      <button className='delBtn' onClick={() => removeProject(project)}>
        RM
      </button>
    </div>*/
    /*я уже кидала ссылку на БЭМ, это методология больше про наименование классов, чтобы было более понятно. 
    В большенстве случаев код читают очень часто, и на чтение тратится больше времени, чем на написание */
    <div className='project'>
      <div className='project__name'>{project.name}</div>
      <div className='project__description'>{project.description}</div>
      <div className='project__actions'>
        {/*Здесь не даю класс кнопкам, потому что далее поменяем их на созданные компонент, это у меня в ветке.
        В React надо стремиться как к раз к выделению компонентов и их переиспользования*/}
        <button>редактрировать</button>
        <button onClick={() => removeProject(project)}>удалить</button>
      </div>
    </div>
    /*Далее см. css */
  );
}

export default ProjectsItem;
