import { useState } from "react";
import { useDispatch } from "react-redux";
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

  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      name: name,
      description: description,
      assignedTo: TokenService.getUserId(),
      statusId: STATUS_TO_DO,
      boardId: "62131ce8b13a7f96e37ed4ad",
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
      />
      <Button color='blue' width={200} text={"Создать"} />
    </Form>
  );
};

export default AddTask;
