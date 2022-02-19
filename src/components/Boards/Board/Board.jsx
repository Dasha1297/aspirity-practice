import { useState } from "react";
import "./Board.css";
import UpdateBoard from "../UpdateBoard";
import { deleteBoard } from "../../../redux/actions/boardsActions";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";

const Board = (dispatch, { _id, name, projectId }) => {

  const [modalEditBoardActive, setModalEditBoardActive] = useState(false);
  const [modalDelBoardActive, setModalDelBoardActive] = useState(false);

  const removeBoard = (_id) => {
    dispatch(deleteBoard(_id));
  };

  return (
    <div className='board'>
      <div className='board__name' id={_id}>{name}</div>
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
        <UpdateBoard name={name} projectId={projectId} id={_id} />
      </Modal>
      <Modal active={modalDelBoardActive} setActive={setModalDelBoardActive}>
        <p>Вы уверены, что хотите удалить доску?</p>
        <div>
          <Button
            type='button'
            text={"Да"}
            onClick={() => removeBoard(_id)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Board;
