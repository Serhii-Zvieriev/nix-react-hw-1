import style from "./Card.module.css";

function Card({ userData, hendelOpenModal }) {
  const { name, age, gender, picture } = userData;
  return (
    <li onClick={() => hendelOpenModal(userData)} className={style.CardItem}>
      <img src={picture} alt={name} />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </li>
  );
}

export default Card;
