import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import EditTask from "../EditTask/EditTask";
import style from "./TaskCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../redux/actions/tasksActions";

const TaskCard = ({ provided, el }) => {
  const [modalEditBoardActive, setModalEditBoardActive] = useState(false);
  const [modalDelBoardActive, setModalDelBoardActive] = useState(false);
  const dispatch = useDispatch();

  const removeTask = (task) => {
    dispatch(deleteTask(task));
    setModalDelBoardActive(false);
  };

  return (
    <div>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={style.task__card}
      >
        <div className={style.card__name}>{el.name}</div>
        <div className={style.card__description}>{el.description}</div>
        <div className={style.card__actions}>
          <Button
            onClick={() => setModalEditBoardActive(true)}
            edit={true}
            width={40}
          />
          <Button
            onClick={() => setModalDelBoardActive(true)}
            removal={true}
            width={40}
          />
        </div>
      </div>
      {modalEditBoardActive ? (
        <Modal
          active={modalEditBoardActive}
          setActive={setModalEditBoardActive}
          name={"Редактировать задачу"}
        >
          <EditTask
            task={el}
            setModalEditBoardActive={setModalEditBoardActive}
          />
        </Modal>
      ) : null}
      {modalDelBoardActive ? (
        <Modal
          active={modalDelBoardActive}
          setActive={setModalDelBoardActive}
          name={"Вы уверены, что хотите удалить задачу?"}
        >
          <div className={style.delete__board}>
            <Button
              type='button'
              text={"Да"}
              width={70}
              onClick={() => removeTask(el)}
            />
            <Button
              type='button'
              text={"Нет"}
              width={70}
              onClick={() => setModalDelBoardActive(false)}
            />
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default TaskCard;
