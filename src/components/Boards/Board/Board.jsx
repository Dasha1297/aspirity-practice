import "./Board.css";

const Board = ({ dispatch, name, id }) => {

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
        <EditBoard id={id} />
      </Modal>
      <Modal active={modalDelBoardActive} setActive={setModalDelBoardActive}>
        <p>Вы уверены, что хотите удалить доску?</p>
        <div>
          <Button
            type='button'
            //text={"Yes"}
            text={"Да"}
            onClick={() => removeBoard(id)}
            //disabled={true}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Board;
