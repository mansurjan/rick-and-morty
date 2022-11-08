export default function deleteState(deleteState) {
  return { type: "DELETE_STORED_CHARACTER", payload: deleteState };
}
