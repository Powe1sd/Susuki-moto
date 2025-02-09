// src/components/Contacto.jsx
import React from "react";

function Contacto() {
  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <div className="info">
        <div className="detalles">
          <i className="fas fa-map-marker-alt"></i>{" "}
          {/* Font Awesome icon (or your icon) */}
          <p>Dirección: Calle 123 #45-67, Ciudad, País</p>
        </div>
        <div className="detalles">
          <i className="fas fa-phone"></i>
          <p>Teléfono: +1 (555) 123-4567</p>
        </div>
        <div className="detalles">
          <i className="fas fa-envelope"></i>
          <p>Email: info@example.com</p>
        </div>
        <div className="detalles">
          {" "}
          {/* Example for social media */}
          <i className="fab fa-facebook"></i>{" "}
          {/* Example for social media icon */}
          <p>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
        {/* Add more contact info as needed */}
      </div>
      <form className="formulario">
        {" "}
        {/* Optional: A contact form */}
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu email" />
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
