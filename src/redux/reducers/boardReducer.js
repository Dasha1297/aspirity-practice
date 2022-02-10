const defaultState = {
  boards: [
    { name: "Long beautiful name of the board" },
    { name: "Name of the board" },
    { name: "Long beautiful name of the board" },
    { name: "A long established fact that a reader will be distracted " },
    {
      name: "A long established fact that a reader will be distracted lorem ipsum some more words ips...",
    },
    { name: "Long beautiful name of the board" },
  ],
};
const boardReducer = (state = defaultState, action) => {
  return state;
};

export default boardReducer;
