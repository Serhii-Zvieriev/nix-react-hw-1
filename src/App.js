import { useState, useEffect } from "react";

import "./App.css";
import { userData } from "./userData";
import CardList from "./components/CardList/CardList";
import Searchbar from "./components/Searchbar/Searchbar";
// import Modal from "./components/Modal/Modal";
import Modal from "react-modal";
import ModalCard from "./components/ModalCard/ModalCard";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserArr, setCurrentUserArr] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (userData) {
      setUsers(userData);
    }
  }, []);

  useEffect(() => {
    if (select) {
      sortedUsers();
    }
  }, [select]);

  const filterHendler = ({ target }) => {
    setFilter(target.value);
  };

  const filterUsers = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return users.filter((users) =>
      users.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const sortedUsers = () => {
    select === "По убыванию"
      ? users.sort((a, b) => a.age - b.age)
      : users.sort((a, b) => b.age - a.age);
  };

  const selectHendler = ({ target }) => {
    setSelect(target.selectedOptions[0].text);
  };

  const hendelClick = () => {
    setFilter("");
    setSelect("");
  };

  function openModal(userData) {
    setIsOpen(true);
    setCurrentUser(userData);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      overlay: {
        backgroundColor: "papayawhip",
      },
      // top: "50%",
      // left: "50%",
      // right: "auto",
      // bottom: "auto",
      // marginRight: "-50%",
      // transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Searchbar
        filter={filter}
        onChange={filterHendler}
        selectHendler={selectHendler}
        hendelClick={hendelClick}
      />

      <CardList userData={filterUsers()} hendelOpenModal={openModal} />

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          // contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button onClick={closeModal}>close</button>
          <ModalCard user={currentUser} />
        </Modal>
      )}
    </>
  );
}

export default App;
