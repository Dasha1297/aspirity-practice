import { useSelector } from "react-redux";
import Board from "./Board/Board";
import style from "./Boards.module.css";
import plus from "../../assets/plus.svg";
const Boards = () => {
  const boards = useSelector((state) => state.boardReducer.boards);
  const Boards = boards.map((board) => <Board name={board.name} users={12} />);
  return (
    <div className={style.wrapper}>
      <h1>Все доски</h1>
      <div className={style.boards}>
        <button className={style.add__button}>
          <img src={plus} />
          Создать новую доску
        </button>
        {Boards}
      </div>
    </div>
  );
};

export default Boards;
