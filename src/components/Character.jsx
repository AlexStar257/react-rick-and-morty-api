import { useState } from "react";
import Modal from "react-modal";
import { CharacterList } from "./CharacterList";

export const Character = ({ id, name, image, location, status, type, gender, origin }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div key={id} className="text-center p-5">
      <h3>{name}</h3>
      <button
        onClick={openModal}
        className="icon-link"
        style={{ border: "none", padding: 0, backgroundColor: "transparent" }}
      >
        <img src={image} alt={name} className="img-fluid rounded-pill" />
      </button>
      <p>{location}</p>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modalOverlay">
        <img src={image} alt={name} className="modalImage" />
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Last known location: {location}</p>
        <p>Status: {status}</p>
        <p>Type: {type}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
        <button onClick={closeModal} className="closeButton">Cerrar</button>
      </Modal>
    </div>
  );
};
