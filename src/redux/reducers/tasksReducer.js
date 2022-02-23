import { v4 } from "uuid";
import {
  ADD_TASK,
  DELETE__TASK,
  REMOVE_PREVIOUS_STATUS,
  SET_DONE,
  SET_NEW_STATUS,
  SET_PROGRESS,
  SET_TASK_STATUS,
  SET_TESTING,
  SET_TO_DO,
  UPDATE_TASK,
} from "../consts";

const defaultState = {
  todo: {
    title: "To do",
    items: [],
  },
  progress: {
    title: "In progress",
    items: [],
  },
  testing: {
    title: "Testing",
    items: [],
  },
  done: {
    title: "Done",
    items: [],
  },
};

const tasksReducer = (state = defaultState, action) => {
  const data = action.payload;
  switch (action.type) {
    case REMOVE_PREVIOUS_STATUS:
      state[data.droppableId].items.splice(data.index, 1);
      return {
        ...state,
        /*
        [data.droppableId]: {
          items: state[data.droppableId].items,
          title: state[data.droppableId].title,
        },*/
      };
    case SET_TASK_STATUS:
      state[data.droppableId].items.splice(data.index, 0, data.item);
      return {
        ...state,
        /*[data.droppableId]: {
          items: state[data.droppableId].items,
          title: state[data.droppableId].title,
        },*/
      };
    case SET_TO_DO:
      return {
        ...state,
        todo: {
          items: data,
          title: state.todo.title,
        },
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: {
          items: data,
          title: state.progress.title,
        },
      };
    case SET_TESTING:
      return {
        ...state,
        testing: {
          items: data,
          title: state.testing.title,
        },
      };
    case SET_DONE:
      return {
        ...state,
        done: {
          items: data,
          title: state.done.title,
        },
      };
    case ADD_TASK:
      return {
        ...state,
        todo: {
          items: [...state.todo.items, data],
          title: state.todo.title,
        },
      };
    case UPDATE_TASK:
      let foundIndex = state[data.status].items.findIndex(
        (item) => item._id === data.task._id
      );
      const newItems = state[data.status].items[foundIndex].slice();
      newItems[foundIndex] = data.task;
      return {
        ...state,
        [data.status]: {
          items: newItems,
          title: state[data.status],
        },
      };
    case DELETE__TASK:
      let index = state[data.status].items.findIndex(
        (item) => item._id === data.task._id
      );
      state[data.status].items.splice(index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tasksReducer;
