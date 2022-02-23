import { useState } from "react";
import Form from "../../Form/Form";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../redux/actions/tasksActions";

const EditTask = ({ task, setModalEditBoardActive }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const editTask = (e) => {
    e.preventDefault();
    task.name = name;
    task.description = description;
    dispatch(updateTask(task));
    setModalEditBoardActive(false);
  };

  return (
    <Form name={"Добавить задачу"} onSubmit={editTask}>
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

export default EditTask;
