import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import Modal_Navbar from "../Modal_Navbar/Modal_Navbar";
import { useState } from "react";
const Nav = ({ onSearch }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);

  return (
    <div className={style.navbar}>
      <Link to={"/"}>
        <img src="../../unnamed.webp" alt="logo" className={style.logo} />
      </Link>
      {pathname == "/home" && <SearchBar onSearch={onSearch} />}

      <img
        hidden={burger}
        src="../../../vector-links.svg"
        alt="logo-links"
        onClick={() => {
          setOpen(true);
          setBurger(true);
        }}
      />
      <Modal_Navbar
        open={open}
        close={() => {
          setOpen(false);
          setBurger(false);
        }}
      />
    </div>
  );
};
export default Nav;
