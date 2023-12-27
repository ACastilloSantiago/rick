import style from "./Favorites.module.css";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import {
  removeFav,
  addFav,
  orderCards,
  filterCards,
} from "../../Redux/actions";
import { useState } from "react";
const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    // console.log(event);
    // console.log(event.target.value);
  };
  return (
    <main className={style.main}>
      <h1 className={style.main__title}>Favoritos</h1>
      <div className={style.options}>
        <select onChange={handleOrder} className={style.options__select}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} className={style.options__select}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="all">All</option>
        </select>
      </div>
      <section className={style.cards}>
        {myFavorites.map((Pj) => {
          console.log("favorites", Pj);
          return (
            <Card
              favv={true}
              key={Pj.id}
              id={Pj.id}
              name={Pj.name}
              status={Pj.status}
              species={Pj.species}
              gender={Pj.gender}
              origin={Pj.origin}
              image={Pj.image}
              onClose={Pj.onClose}
            />
          );
        })}
      </section>
    </main>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
