import { useState } from "react";
import validation from "../Validation/Validation";
import Modal from "../Modal/Modal";
import style from "./Form.module.css";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  const [open, setOpen] = useState(false);
  const signin_acount = () => {
    setOpen(true);
  };
  let disableSubmit = true;
  if (!errors.password && !errors.email) {
    disableSubmit = false;
  } else {
    disableSubmit = true;
  }
  return (
    <section className={style.main}>
      <div>
        <img
          className={style.main__img}
          src="../../../Rick-and-Morty-title-short-back.png"
          // src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
          alt="titulo"
        />
        <p className={style.main__paragraph}>
          Aplicación web ambientada en el universo de "Rick and Morty",
          detallando información de los diversos personajes.
        </p>
      </div>
      <article className={style.log_sign}>
        <form onSubmit={handlerSubmit} className={style.form}>
          <div className={style.container_input}>
            <input
              className={style.form__input}
              name="email"
              value={userData.email}
              type="text"
              onChange={handleChange}
              placeholder="Ingrese su email"
            />
            <span className={style.form__validation}>{errors.email}</span>
          </div>
          <div className={style.container_input}>
            <input
              className={style.form__input}
              name="password"
              value={userData.password}
              type="password"
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
            />
            <span className={style.form__validation}>{errors.password}</span>
          </div>
          <button
            className={style.form__submit}
            type="submit"
            disabled={disableSubmit}
          >
            Iniciar Sesión
          </button>
        </form>
        <button className={style.form__signin} onClick={signin_acount}>
          Crear Cuenta
        </button>
        <Modal
          login={login}
          Open={open}
          Close={() => {
            setOpen(false);
          }}
        />
      </article>
    </section>
  );
};
export default Form;
