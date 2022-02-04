const defaultState = {
  projects: []
}

//const ADD_PROJECTS = "ADD_PROJECTS";
//const EDIT_PROJECTS = "EDIT_PROJECTS";
//const REMOVE_PROJECTS = "REMOVE_PROJECTS";

export const projectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PROJECTS":
      return {...state, projects: [...state.projects, action.payload]}
    case "EDIT_PROJECTS":
      return {...state, projects: state.projects.map(project => project.id === action.payload)}
    case "REMOVE_PROJECTS":
      return {...state, projects: state.projects.filter(projects => projects.id !== action.payload)}
    default:
      return state
  }
}

export const addProjectAction = (payload) => ({type: "ADD_PROJECTS", payload}) 
export const editProjectAction = (payload) => ({type: "EDIT_PROJECTS", payload}) 
export const removeProjectAction = (payload) => ({type: "REMOVE_PROJECTS", payload}) 