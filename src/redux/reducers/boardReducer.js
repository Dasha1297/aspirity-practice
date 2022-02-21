import { ADD_BOARD, BOARDS, DELETE_BOARD, EDIT_BOARD } from "../consts";

const defaultState = {
  boards: [],
};

export const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BOARDS:
      return { boards: action.payload };
    case ADD_BOARD:
      return { boards: [...state.boards, action.payload] };
    case EDIT_BOARD:
      return { boards: state.boards.map((board) => action.board.id ? {...board, ...action.payload.data} : board) };
    case DELETE_BOARD:
      return { boards: state.boards.filter((board) => board._id !== action.payload) };
    default:
        return state; 
  }
};

export const getBoards = (payload) => ({ type: BOARDS, payload });
export const addBoard = (payload) => ({ type: ADD_BOARD, payload });
export const editBoard = (payload) => ({ type: EDIT_BOARD, payload });
export const deleteBoard = (payload) => ({ type: DELETE_BOARD, payload });

