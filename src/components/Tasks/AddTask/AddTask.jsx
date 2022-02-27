import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addTask } from "../../../redux/actions/tasksActions";
import { STATUS_TO_DO } from "../../../redux/consts";
import TokenService from "../../../services/TokenService";
import Form from "../../Form/Form";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";

const AddTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const board = useParams().boardsId;

  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      name: name,
      description: description,
      assignedTo: TokenService.getUserId(),
      statusId: STATUS_TO_DO,
      boardId: board,
      elapsedTime: 0,
    };
    dispatch(addTask(newTask));
    setName("");
    setDescription("");
  };

  return (
    <Form name={"Добавить задачу"} onSubmit={addNewTask}>
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Введите название задачи'
        type={"text"}
        width={200}
      />
      <InputField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Введите описание'
        type={"text"}
        width={200}
        maxlength={1024}
      />
      <Button
        color='blue'
        width={200}
        text={"Создать"}
        disabled={name === "" || description === ""}
      />
    </Form>
  );
};

export default AddTask;
