import { useState} from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/actions/boardsActions";
import Form from "../Form/Form";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import style from "./Boards.module.css";

const AddBoard = ({ projectId }) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addNewBoard = (event) => {
    event.preventDefault();

    const board = {
    name: name,
    projectId,
    }

    dispatch(addBoard(board));
    setName("");
    
  };

  return (
    <div className={style.create__board}>
      <Form>
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Название доски"}
        type={"text"}
      />
      <Button
        type='button' 
        text={"Сохранить"} 
        onClick={addNewBoard} 
        disabled={name === ""}
        />
    </Form>
    </div>
  );
};

export default AddBoard;
