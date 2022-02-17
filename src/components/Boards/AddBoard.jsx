import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/actions/boardsActions";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import Board from "./Board/Board";
import style from "./Boards.module.css";
const AddBoard = () => {
  const dispatch = useDispatch();

  const addButton = () => {
    dispatch(addBoard({ name: "Board", id: 5 }));
  };

  return (
    <div className={style.create__board}>
      <InputField />
      <Button onClick={() => addButton()} />
    </div>
  );
};

export default AddBoard;
