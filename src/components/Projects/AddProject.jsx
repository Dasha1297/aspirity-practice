import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";
import { addProject } from "../../redux/actions/projectsActions";

function AddProject({ setModalAddProjectActive }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const addNewProject = (event) => {
    event.preventDefault();
    const project = {
      name,
      description,
    };
    dispatch(addProject(project));
    setName("");
    setDescription("");
    setModalAddProjectActive(false);
  };

  return (
    <Form 
    //name={"Новый проект"}
    >
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        //placeholder={"Project name"}
        placeholder={"Название проекта"}
        type={"text"}
      />
      <InputField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        //placeholder={"Description"}
        placeholder={"Описание проекта"}
        type={"text"}
      />
      <Button 
        type='button' 
        text={"Сохранить"} 
        onClick={addNewProject} 
        disabled={name === "" || description === ""}
        />
    </Form>
  );
}

export default AddProject;
