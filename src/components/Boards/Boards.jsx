import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Board from "./Board/Board";
import style from "./Boards.module.css";
import plus from "../../assets/plus.svg";
import AddBoard from "./AddBoard";
import Modal from "../Modal/Modal";
//import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { getBoards } from "../../redux/actions/boardsActions";

const Boards = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardReducer.boards);
  const Boards = boards.map((board) => <Board name={board.name} users={12} />);

  const [modalAddBoardActive, setModalAddBoardActive] = useState(false);

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <h1>Все доски</h1>
      <div className={style.boards}>
        <button className={style.add__button} onClick={() => setModalAddBoardActive(true)}>
          <img src={plus} alt='plus' />
          Создать новую доску
        </button>
        {Boards}
      </div>
      <Modal
        active={modalAddBoardActive}
        setActive={setModalAddBoardActive}
      >
        <AddBoard />
      </Modal>
    </div>
  );
};

export default Boards;
