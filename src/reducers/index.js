import { combineReducers } from "redux";
import character from "./character";
import deleteState from "./UIstate";
import showStoredCharacter from "./storedCharacter";
export default combineReducers({
  character,
  deleteState,
  showStoredCharacter,
});
