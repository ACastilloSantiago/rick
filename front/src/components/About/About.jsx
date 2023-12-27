import { Link } from "react-router-dom";
import style from "./About.module.css";
const About = () => {
  return (
    <main className={style.main}>
      {/* <h1>Sobre Mí</h1> */}
      {/* <section> */}
      {/* <h2>Santiago Castillo</h2>
        <h3>full stack developer</h3> */}
      <header className={style.header}>
        <h1 className={style.header__title}>Santiago</h1>
        <h2 className={style.header___title__background}>castillo</h2>

        <h3 className={style.header__sub__title}>full stack developer</h3>
      </header>
      <div className={style.home__icons}>
        <div>
          <img
            id="email-icon"
            className={style.home__icon}
            src="../../../mail.svg"
            alt="se"
          />
        </div>
        <a href={"https://github.com/ACastilloSantiago"} target="_blank">
          <img className={style.home__icon} src="../../../git.svg" alt="se" />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-castillo-dev/"
          target="_blank"
        >
          <img
            className={style.home__icon}
            src="../../../linkedin.svg"
            alt="se"
          />
        </a>
      </div>
      {/* </section> */}
    </main>
  );
};
export default About;
