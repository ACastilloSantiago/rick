import { useState } from "react";
import style from "./Modal.module.css";
import validation from "../Validation/Validation";
import axios from "axios";
const Modal = ({ Open, Close }) => {
  if (!Open) return;
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
  const register = async () => {
    try {
      //   const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      await axios.post(URL, userData);
      //   console.log(access);
      //   console.log(data);
      //   setAccess(access);
      //   access && navigate("/home");
    } catch (error) {
      console.log("s", error);
    }
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    register(userData);
  };
  let disableSubmit = true;
  if (!errors.password && !errors.email) {
    disableSubmit = false;
  } else {
    disableSubmit = true;
  }
  return (
    <main className={style.main}>
      <section className={style.signin}>
        <h1 className={style.signin__title}>Registrate</h1>
        <form onSubmit={handlerSubmit} className={style.form}>
          <div className={style.container_input}>
            <input
              className={style.form__input}
              name="email"
              value={userData.email}
              type="text"
              onChange={handleChange}
              placeholder="Ingrese su email"
              autoComplete="off"
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
              autoComplete="off"
            />
            <span className={style.form__validation}>{errors.password}</span>
          </div>
          <button
            className={style.form__submit}
            type="submit"
            disabled={disableSubmit}
          >
            Crear Cuenta
          </button>
        </form>
        <span className={style.signin__close} onClick={Close}>
          x
        </span>
      </section>
    </main>
  );
};

export default Modal;
