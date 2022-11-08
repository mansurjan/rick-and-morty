export default function storedCharacter(state = {}, action) {
  switch (action.type) {
    case "SHOW_STORED_CHARACTER":
      return action.payload;
    default:
      return state;
  }
}
