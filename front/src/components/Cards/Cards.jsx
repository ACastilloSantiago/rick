import Card from "../Card/Card";
import style from "./Cards.module.css";
const Cards = ({ characters, onClose }) => {
  return (
    <section className={style.cards}>
      {characters.map((Pj) => {
        return (
          <Card
            key={Pj.id}
            id={Pj.id}
            name={Pj.name}
            status={Pj.status}
            species={Pj.species}
            gender={Pj.gender}
            origin={Pj.origin}
            image={Pj.image}
            onClose={onClose}
          />
        );
      })}
    </section>
  );
};
export default Cards;
