import { useState } from "react";
import "./Board.css";
import UpdateBoard from "../UpdateBoard";
import { deleteBoard } from "../../../redux/actions/boardsActions";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";

const Board = ({ dispatch, board }) => {

  const [modalEditBoardActive, setModalEditBoardActive] = useState(false);
  const [modalDelBoardActive, setModalDelBoardActive] = useState(false);

  const removeBoard = (board) => {
    dispatch(deleteBoard(board._id));
  };

  return (
    <div className='board'>
      <NavLink to={`/tasks/${board._id}`}>
        <div className='board__name'>{board.name}</div>
      </NavLink>
      <div className='board__settings'>
        <Button
          onClick={() => setModalEditBoardActive(true)}
          edit={true}
          width={40}
        ></Button>
        <Button
          onClick={() => setModalDelBoardActive(true)}
          removal={true}
          width={40}
        ></Button>
      </div>
      <Modal 
        active={modalEditBoardActive} 
        setActive={setModalEditBoardActive}
        name={"Редактировать доску"}
        >
        <UpdateBoard 
          name={board.name} 
          //projectId={board.projectId} 
          id={board._id} />
      </Modal>
      <Modal 
        active={modalDelBoardActive} 
        setActive={setModalDelBoardActive}
        name={"Вы уверены, что хотите удалить доску?"}
        >
         <div className='question__delete__board'>
          <Button
            type='button'
            text={"Да"}
            onClick={() => removeBoard(board)}
          />
         </div>
      </Modal>
    </div>
  );
};

export default Board;
