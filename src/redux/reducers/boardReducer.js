import { ADD_BOARD, BOARDS, DELETE_BOARD, EDIT_BOARD } from "../consts";

const defaultState = {
  boards: [
    { name: "Long beautiful name of the board", id: 0 },
    { name: "Name of the board" },
    { name: "Long beautiful name of the board", id: 1 },
    {
      name: "A long established fact that a reader will be distracted ",
      id: 2,
    },
    {
      name: "A long established fact that a reader will be distracted lorem ipsum some more words ips...",
      id: 3,
    },
    { name: "Long beautiful name of the board", id: 4 },
  ],
};
const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    case EDIT_BOARD:
      return {
        ...state,
        boards: state.boards.map((board) => board.id === board.payload),
      };
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== board.payload),
      };
      return;
  }
  return state;
};

export default boardReducer;
