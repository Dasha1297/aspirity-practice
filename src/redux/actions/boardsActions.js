import { ADD_BOARD, DELETE_BOARD, EDIT_BOARD } from "../consts";

export const addBoard = (payload) => ({ type: ADD_BOARD, payload });
export const editBoard = (payload) => ({ type: EDIT_BOARD, payload });
export const deleteBoard = (payload) => ({ type: DELETE_BOARD, payload });
