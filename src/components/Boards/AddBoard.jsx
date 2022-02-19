import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/actions/boardsActions";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import Board from "./Board/Board";
import style from "./Boards.module.css";

const AddBoard = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addBoard = (event) => {
    event.preventDefault();

    dispatch(addBoard({ name, id: 5 }));
    setName("");
    
  };

  return (
    <div className={style.create__board}>
      <Form name={"Новый проект"}>
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Название доски"}
        type={"text"}
      />
      <Button type='button' text={"Сохранить"} onClick={addBoard} />
    </Form>
    </div>
  );
};

export default AddBoard;
