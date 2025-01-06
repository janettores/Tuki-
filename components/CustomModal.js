import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Necesario para accesibilidad

const CustomModal = ({ isOpen, onRequestClose, title, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          color: "#fff",
          background: "#0D494B",
          border: "1px solid #15EBFA",
          borderRadius: "10px",
          padding: "20px",
          width: "32%", // Ancho del modal
          height: "auto", // Alto dinámico
          maxHeight: "40vh", // Limitar el alto si hay mucho contenido
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.3em"
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>
      <p style={{ marginBottom: "20px", fontSize: "16px", padding: "0 7em" }}>{message}</p>
      <button
        onClick={onRequestClose}
        style={{
          backgroundColor: "#15EBFA",
          border: "none",
          borderRadius: "10px",
          padding: "15px",
          color: "#000",
          fontSize: "16px",
          cursor: "pointer",
          width: "70%",
        }}
      >
        Entiendo
      </button>
    </Modal>
  );
};

export default CustomModal;
