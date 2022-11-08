import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import deleteCharacter from "./actionCreators/deleteCharacter";
import deleteState from "./actionCreators/deleteState";
import clearAllCharacters from "./actionCreators/clearAllCharacters";
import showStoredCharacter from "./actionCreators/showStoredCharacter";

const StoredParams = () => {
  const [activeFilter, setActiveFilter] = useState();
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.character).characters;

  function handleDeleteCharacter(character) {
    dispatch(deleteCharacter(character.id));
    dispatch(deleteState(character.id));
  }
  function representCharacter(character) {
    setActiveFilter(character.id);
    dispatch(showStoredCharacter(character));
  }

  function clearAll(characters) {
    dispatch(clearAllCharacters());
    dispatch(deleteState(characters));
  }
  return (
    <div className="right">
      <h1>Cached Items</h1>
      <button onClick={() => clearAll(characters)}>Clear All</button>
      <div className="list">
        {characters &&
          characters.map((character, index) => (
            <div
              key={index}
              className={`listItem ${
                activeFilter === character.id ? "highlighted" : ""
              }`}
            >
              <img
                src={character.image}
                alt={character.name}
                onClick={(e) => representCharacter(character)}
              />
              <button onClick={(e) => handleDeleteCharacter(character)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoredParams;
