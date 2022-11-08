export default function showStoredCharacter(storedCharacter) {
  return { type: "SHOW_STORED_CHARACTER", payload: storedCharacter };
}
