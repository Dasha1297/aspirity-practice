import "./Board.css";

const Board = ({ name }) => {
  return (
    <div className='board'>
      <div className='board__settings'></div>
      <div className='board__name'>{name}</div>
    </div>
  );
};

export default Board;
