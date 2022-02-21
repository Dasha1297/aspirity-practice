import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Board from "./Board/Board";
import style from "./Boards.module.css";
import plus from "../../assets/plus.svg";
import AddBoard from "./AddBoard";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { getBoards } from "../../redux/actions/boardsActions";
import { useParams } from "react-router-dom";

const Boards = () => {

  const { projectId } = useParams();

  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardReducer.boards.filter((b) => b.projectId === projectId));
  const Boards = boards.map((board) => <Board key={board.id ?? board.name} board={board} users={12} dispatch={dispatch} />);
  
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
        <AddBoard projectId={projectId}/>
      </Modal>
    </div>
  );
};

export default Boards;
