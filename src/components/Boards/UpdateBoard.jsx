import React, { useState } from 'react';
import { updateBoard } from '../../redux/actions/boardsActions';
import Form from '../Form/Form';
import InputField from '../UI/InputField/InputField';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import './UpdateBoard.css';

function UpdateBoard (name, id) {

  const [updateBoardName, setUpdateBoardName] = useState(name)
  const dispatch = useDispatch()

  const editBoard = (event) => {
    event.preventDefault()
  
    dispatch(updateBoard(updateBoardName, id));
    setUpdateBoardName('')
  };

  const cancelUpdate = (event) => {
    event.preventDefault()
    setUpdateBoardName(name)

    console.log('remove question modal');
  }

  return (
    <Form name={"Редактировать доску"}>
      <InputField
        value={updateBoardName}
        onChange={(e) => setUpdateBoardName(e.target.value)}
        placeholder={updateBoardName}
        type={"text"}
      />
      <div className='update_board_actions'>
        <Button
          type='button'
          //text={"Save"}
          text={"Сохранить"}
          onClick={editBoard}
          //disabled={true}
        />
        <Button
          type='button'
          //text={"Cancle"}
          text={"Исходное значение"}
          onClick={cancelUpdate}
          //disabled={true}
        />
      </div>
        
    </Form>
  )
}

export default UpdateBoard; 