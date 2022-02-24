import {
  ADD_TASK,
  DELETE__TASK,
  REMOVE_PREVIOUS_STATUS,
  SET_DONE,
  SET_PROGRESS,
  SET_TASK_STATUS,
  SET_TESTING,
  SET_TO_DO,
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_TO_DO,
  UPDATE_TASK,
} from "../consts";
import axios from "axios";
import TokenService from "../../services/TokenService";
import { ApiUrl, FAIL, SUCCESS } from "../consts";

export const removeStatus = (payload) => ({
  type: REMOVE_PREVIOUS_STATUS,
  payload,
});

export const setNewStatus = (payload) => ({ type: SET_TASK_STATUS, payload });

export const getAllTasks = (boardID) => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: ApiUrl + `tasks`,
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    });
    console.log(boardID);
    const tasks = response.data.filter((i) => i.boardId === boardID);
    console.log(tasks);
    dispatch(filterByStatus(tasks));
    return SUCCESS;
  } catch (error) {
    return FAIL;
  }
};

export const filterByStatus = (tasks) => async (dispatch) => {
  const todo = [];
  const progress = [];
  const testing = [];
  const done = [];
  tasks.forEach((task) => {
    switch (task.statusId) {
      case STATUS_TO_DO:
        todo.push(task);
        break;
      case STATUS_IN_PROGRESS:
        progress.push(task);
        break;
      case STATUS_TESTING:
        testing.push(task);
        break;
      case STATUS_DONE:
        done.push(task);
        break;
    }
  });

  dispatch({ type: SET_TO_DO, payload: todo });
  dispatch({ type: SET_PROGRESS, payload: progress });
  dispatch({ type: SET_TESTING, payload: testing });
  dispatch({ type: SET_DONE, payload: done });
};

export const addTask = (task) => async (dispatch) => {
  const token = TokenService.getUser().token;
  try {
    axios({
      method: "POST",
      url: ApiUrl + "tasks/create",
      headers: {
        Authorization: "Bearer " + token,
      },
      data: task,
    });
    dispatch({ type: ADD_TASK, payload: task });
  } catch (error) {
    return error;
  }
};

export const updateTask = (task) => async (dispatch) => {
  const token = TokenService.getUser().token;
  const id = task._id;
  try {
    const response = await axios({
      method: "PUT",
      url: ApiUrl + `tasks/update/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: task,
    });
    dispatch({
      type: UPDATE_TASK,
      payload: {
        task: response.data,
        status: keyByStatus(response.data.statusId),
      },
    });
  } catch (error) {
    return error;
  }
};

export const updateStatus = (task) => async (dispatch) => {
  const token = TokenService.getUser().token;
  const id = task._id;
  try {
    const response = await axios({
      method: "PUT",
      url: ApiUrl + `tasks/update/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: task,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const keyByStatus = (status) => {
  switch (status) {
    case STATUS_TO_DO:
      return "todo";
    case STATUS_IN_PROGRESS:
      return "progress";
    case STATUS_TESTING:
      return "testing";
    case STATUS_DONE:
      return "done";
  }
};

export const deleteTask = (task) => async (dispatch) => {
  try {
    const token = TokenService.getUser().token;
    const response = await axios({
      method: "DELETE",
      url: ApiUrl + `tasks/delete/${task._id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatch({
      type: DELETE__TASK,
      payload: {
        task: task,
        status: keyByStatus(task.statusId),
      },
    });
  } catch (error) {
    throw error;
  }
};
