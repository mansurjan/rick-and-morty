export default function deleteState(state = "", action) {
  switch (action.type) {
    case "DELETE_STORED_CHARACTER":
      return action.payload;
    default:
      return state;
  }
}
