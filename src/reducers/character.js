const INIT_STATE = {
  characters: [],
};
export default function character(state = INIT_STATE, action) {
  switch (action.type) {
    case "ADD_CHARACTER":
      return { ...state, characters: [...state.characters, action.payload] };
    case "DELETE_CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "CLEAR_ALL_CHARACTERS":
      return { ...state, characters: [] };
    default:
      return state;
  }
}

// function checkFunction(state, action) {
//   const itemFind = state.characters.filter(
//     (character) => character.id === action.payload.id
//   );
//   if (itemFind.length) {
//     return state;
//   } else {
//     return { ...state, characters: [...state.characters, action.payload] };
//   }
// }
