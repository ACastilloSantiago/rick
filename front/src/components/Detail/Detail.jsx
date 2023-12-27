import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
// import { URL_BASE, API_KEY } from "../../App";
const Detail = () => {
  const { id } = useParams();
  //   console.log(id);
  const [character, setCharacter] = useState({});

  //! useEffect con servidor local
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  //! useEffect con api de henry
  // useEffect(() => {
  //   axios(`${URL_BASE}${id}?${API_KEY}`).then(({ data }) => {
  //     if (data.name) {
  //       setCharacter(data);
  //     } else {
  //       window.alert("No hay personajes con ese ID");
  //     }
  //   });
  //   return setCharacter({});
  // }, [id]);
  //////////////
  // const { name, status, species, gender, origin, image } = character;
  // console.log(character.origin.name);
  console.log(character);
  return (
    <section className={style.detail}>
      <h1 className={style.detail__title}>
        {character.name && character.name}
      </h1>
      <img
        src={character.image && character.image}
        alt={character.name && character.name}
        className={style.detail__img}
      />
      <div className={style.detail__texts}>
        <span className={style.detail__text}>
          Status | {character.status && character.status}
        </span>
        <span className={style.detail__text}>
          Species | {character.species && character.species}
        </span>
        <span className={style.detail__text}>
          Gender | {character.gender && character.gender}
        </span>
        <span className={style.detail__text}>
          Origin | {character.origin?.name && character.origin?.name}
        </span>
      </div>
    </section>
  );
};
export default Detail;
