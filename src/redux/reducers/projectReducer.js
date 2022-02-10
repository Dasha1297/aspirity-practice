import {
  ADD_PROJECTS,
  REMOVE_PROJECTS,
} from "../consts";

const defaultState = {
  projects: [],
};



export const projectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROJECTS:
      return { ...state, projects: [...state.projects, action.payload] };
    case REMOVE_PROJECTS:
      return {
        ...state,
        projects: state.projects.filter(
          (projects) => projects.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addProjectAction = (payload) => ({
  type: ADD_PROJECTS,
  payload,
});

export const removeProjectAction = (payload) => ({
  type: REMOVE_PROJECTS,
  payload,
});
