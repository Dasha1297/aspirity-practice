import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import * as projectActions from "../../redux/reducers/projectReducer";
import { v4 as uuid } from "uuid";
import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addProject = (event) => {
    event.preventDefault();

    const project = {
      id: uuid(),
      name,
      description,
    };
    dispatch(projectActions.addProjectAction(project));
    setName("");
    setDescription("");
  };

  return (
    <Form name={"Новый проект"}>
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
      <Button type='button' text={"Сохранить"} onClick={addProject} />
    </Form>
  );
}

export default AddProject;
