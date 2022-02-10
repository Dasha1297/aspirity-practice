import "./Board.css";

const Board = ({ name, users }) => {
  return (
    <div className='board'>
      <div className='board__settings'></div>
      <div className='board__name'>{name}</div>
      <div className='board__users'>{users} пользователей</div>
    </div>
  );
};

export default Board;
