export default function deleteCharacter(characterId) {
  return { type: "DELETE_CHARACTER", payload: characterId };
}
