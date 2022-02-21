import { useState } from "react";
import "./Board.css";
import UpdateBoard from "../UpdateBoard";
import { deleteBoard } from "../../../redux/actions/boardsActions";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";

const Board = (dispatch, id, name, projectId) => {

  const [modalEditBoardActive, setModalEditBoardActive] = useState(false);
  const [modalDelBoardActive, setModalDelBoardActive] = useState(false);

  const removeBoard = (id) => {
    dispatch(deleteBoard(id));
  };

  return (
    <div className='board'>
      <div className='board__name' id={id}>{name}</div>
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
      <Modal active={modalEditBoardActive} setActive={setModalEditBoardActive}>
        <UpdateBoard name={name} projectId={projectId} id={id} />
      </Modal>
      <Modal active={modalDelBoardActive} setActive={setModalDelBoardActive}>
        <p style={{margin: '15px'}}>Вы уверены, что хотите удалить доску?</p>
         <div className='question__delete__board'>
          <Button
            type='button'
            text={"Да"}
            onClick={() => removeBoard(id)}
          />
         </div>
      </Modal>
    </div>
  );
};

export default Board;
