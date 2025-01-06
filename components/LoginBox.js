import React, { useState } from "react";
import CustomModal from "./CustomModal";

const LoginBox = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Evita recargar la página
    openModal(); // Abre el modal
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <h2>Ingresar correo y contraseña</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Usuario Admin" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="**********" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>

      {/* Modal */}
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title="Datos incorrectos"
        message="El correo y/o la contraseña que usted ha ingresado son incorrectos. Por favor, intente nuevamente o comuníquese con el propietario si cree que se trata de un error."
      />
    </div>
  );
};

export default LoginBox;
