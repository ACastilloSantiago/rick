import style from "./Modal_Navbar.module.css";
import { Link } from "react-router-dom";
const Modal_Navbar = ({ open, close }) => {
  if (!open) return;
  return (
    <main className={style.main}>
      <section className={style.modal}>
        <span className={style.modal__exit} onClick={close}>
          x
        </span>
        <Link className={style.modal__links} to="/home" onClick={close}>
          Inicio
        </Link>
        <Link className={style.modal__links} to="/favorites" onClick={close}>
          Favoritos
        </Link>
        <Link className={style.modal__links} to="/about" onClick={close}>
          Sobre Mí
        </Link>
      </section>
    </main>
  );
};

export default Modal_Navbar;
