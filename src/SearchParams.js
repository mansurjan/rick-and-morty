/* eslint-disable eqeqeq */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import addCharacter from "./actionCreators/changeCharacter";

const SearchParams = () => {
  const [id, setId] = useState();
  const [storedCharacter, setStoredCharacter] = useState();
  const characters = useSelector((state) => state.character).characters;
  const deleteState = useSelector((state) => state.deleteState);
  const showStoredCharacter = useSelector((state) => state.showStoredCharacter);
  const dispatch = useDispatch();

  useEffect(() => {
    setStoredCharacter(showStoredCharacter);
  }, [showStoredCharacter, deleteState]);

  useEffect(() => {
    setStoredCharacter("");
  }, [deleteState]);

  async function handleFetch(id) {
    if (characters.filter((character) => character.id == id).length) {
      const filteredCharacter = characters.filter(function (element) {
        return element.id == id;
      });
      setStoredCharacter(filteredCharacter[0]);
    } else {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();

      dispatch(addCharacter(data));
      setStoredCharacter(data);
    }
    setId("");
  }

  return (
    <div className="left">
      <div className="search">
        <div className="search-input">
          <input
            type="text"
            id="searchCharacter"
            placeholder="Enter number"
            value={id || ""}
            onChange={(e) => setId(e.target.value)}
            onBlur={(e) => setId(e.target.value)}
          />
        </div>
        <button onClick={() => id && handleFetch(id)}>Search</button>
      </div>
      {storedCharacter && (
        <div className="search-result">
          <p>Search results:</p>
          <h2>{storedCharacter.name}</h2>
          <div className="image">
            <img src={storedCharacter.image} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchParams;
