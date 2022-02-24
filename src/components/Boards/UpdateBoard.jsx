import React, { useState } from 'react';
import { updateBoard } from '../../redux/actions/boardsActions';
import Form from '../Form/Form';
import InputField from '../UI/InputField/InputField';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import './UpdateBoard.css';

function UpdateBoard ({ name, id, setModalEditBoardActive }) {

  const [updatedBoardName, setUpdatedBoardName] = useState(name);
  const dispatch = useDispatch()

  const editBoard = (event) => {
    event.preventDefault()
  
    dispatch(updateBoard(updatedBoardName, id));
    setUpdatedBoardName('')
    setModalEditBoardActive(false);
  };

  const cancelUpdate = (event) => {
    event.preventDefault()
    setUpdatedBoardName(name)
  }

  return (
    <Form>
      <InputField
        value={updatedBoardName}
        onChange={(e) => setUpdatedBoardName(e.target.value)}
        placeholder={updatedBoardName}
        type={"text"}
      />
      <div className='update_board_actions'>
        <Button
          type='button'
          //text={"Save"}
          text={"Сохранить"}
          onClick={editBoard}
          disabled={updatedBoardName === ""}
        />
        <Button
          type='button'
          //text={"Cancle"}
          text={"Исходное значение"}
          onClick={cancelUpdate}
        />
      </div>
        
    </Form>
  )
}

export default UpdateBoard; 