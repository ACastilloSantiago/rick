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
      <Link to={"/"} className={style.logoContainer}>
        <img src="../../unnamed.webp" alt="logo" className={style.logo} />
      </Link>
      {pathname == "/home" && <SearchBar onSearch={onSearch} />}
      <section className={style.links}>
        <Link className={style.links__link} to="/home" onClick={close}>
          Inicio
        </Link>
        <Link className={style.links__link} to="/favorites" onClick={close}>
          Favoritos
        </Link>
        <Link className={style.links__link} to="/about" onClick={close}>
          Sobre Mí
        </Link>
      </section>
      <div className={style.burgerContainer}>
        <img
          // hidden={burger}
          className={style.burger}
          src="../../../vector-links.svg"
          alt="logo-links"
          onClick={() => {
            setOpen(true);
            setBurger(true);
          }}
        />
      </div>
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
