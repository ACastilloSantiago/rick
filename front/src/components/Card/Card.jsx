import { Link } from "react-router-dom";
import { removeFav, addFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";
const Card = ({
  favv,
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  removeFav,
  addFav,
  myFavorites,
}) => {
  let props = { id, name, status, species, gender, origin, image };
  console.log("card", props);
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props); // CON TERNARIO
    setIsFav(!isFav);
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={style.card}>
      {isFav ? (
        <span className={style.card__fav} onClick={handleFavorite}>
          ❤️
        </span>
      ) : (
        <span className={style.card__fav} onClick={handleFavorite}>
          🤍
        </span>
      )}
      <div className={style.imagen}>
        <img className={style.imagen__image} src={image} alt={name} />
        <img
          className={style.imagen__images}
          src="https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png"
          alt=""
        />
        <Link to={`/detail/${id}`}>
          <h3 className={style.imagen__name}>{name}</h3>
        </Link>
      </div>
      <div className={style.text}>
        <span className={style.card__span}>Species: {species}</span>
        <span className={style.card__span}>Gender: {gender}</span>
        <span className={style.card__span}>Status: {status}</span>
        <span className={style.card__span}>Origin: {origin.name}</span>
      </div>
      {favv ? (
        ""
      ) : (
        <span className={style.card__close} onClick={() => onClose(id)}>
          X
        </span>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id)); /// { type: ADD_FAV, payload: personaje }
    },
    addFav: (personaje) => {
      dispatch(addFav(personaje)); //! { type: REMOVE_FAV, payload: id }
    },
  };
};
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
