import style from "./CardList.module.css";

import Card from "../Card/Card";

function CardList({ userData, hendelOpenModal }) {
  return (
    <ul className={style.ImageGallery}>
      {userData.map((userData) => (
        <Card
          key={userData._id}
          userData={userData}
          hendelOpenModal={hendelOpenModal}
        />
      ))}
    </ul>
  );
}

export default CardList;
