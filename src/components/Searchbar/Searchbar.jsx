import style from "./Searchbar.module.css";
import Select from "../Select/Select";

function Searchbar({ filter, onChange, selectHendler, hendelClick }) {
  return (
    <>
      <header className={style.Searchbar}>
        <input
          name="inputValue"
          value={filter}
          onChange={onChange}
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search users"
        />
        <Select selectHendler={selectHendler} />
      </header>
      <button className={style.btn} type="button" onClick={hendelClick}>
        Clear
      </button>
    </>
  );
}

export default Searchbar;
