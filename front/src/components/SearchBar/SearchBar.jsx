import { useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [id, setid] = useState("");

  const handleChange = (event) => {
    setid(event.target.value);
    if (event.keyCode === 13) {
      onSearch(id);
    }
  };

  return (
    <div className={style.search}>
      <input
        className={style.search__input}
        id="agregar"
        type="number"
        value={id}
        onChange={handleChange}
        placeholder="Escrbir id de personaje"
        // onInput={handleChange}
        onKeyDown={handleChange}
      />
      {/* <button
        onClick={() => {
          onSearch(id);
          // setid("");
        }}
        className={style.search__button}
      >
        Agregar
      </button> */}
      <div className={style.icon_container}>
        <img
          src="../../../vector-search.svg"
          alt="search-logo"
          className={style.icon__logo}
          onClick={() => {
            onSearch(id);
            // setid("");
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
