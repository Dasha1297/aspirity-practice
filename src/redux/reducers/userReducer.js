import { SET_USER } from "../consts";

const defaultState = {
  _id: -1,
  name: "",
  email: "",
  avatarLink: "https://avatarSite/userAvatar.jpg",
  projectIds: [],
  boardIds: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        _id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        avatarLink: "https://avatarSite/userAvatar.jpg",
        projectIds: [],
        boardIds: [],
      };
    default:
      return state;
  }
};

export default userReducer;
