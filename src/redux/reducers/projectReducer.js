import {
  FETCH_PROJECTS_SUCCESS,
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from "../consts";

const defaultState = {
  projects: [],
};


export const projectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return { projects: action.payload };
    case ADD_PROJECT:
      return { projects: [...state.projects, action.payload] };
    case UPDATE_PROJECT:
      return { projects: state.projects.map((project) => project._id === action.payload.id ? {...project, ...action.payload.data} : project) };
    case REMOVE_PROJECT:
      return { projects: state.projects.filter((project) => project._id !== action.payload) };
    default:
      return state;
  }
};

export const addAllProjectsAction = (payload) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload,
});

export const addProjectAction = (payload) => ({
  type: ADD_PROJECT,
  payload,
});

export const  updateProjectAction = (payload) => ({
  type: UPDATE_PROJECT,
  payload,
});

export const removeProjectAction = (payload) => ({
  type: REMOVE_PROJECT,
  payload,
});

// thunk(action, dispatch) {
//   if ( typeof action === "function") {
//     action(dispatch);
//   } else {
//     dispatch(action);
//   }
// }
// dispatch(fetchProjects());