// src/components/modulo7.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Modulo7() {
  return (
    <div className="modulo7-container">
      <div className="modulo7-item">
        <div className="icon-container">
          <i className="fas fa-phone"></i> {/* Replace with your icon */}
        </div>
        <div className="text-container">
          <h3>Solicitud de Contacto</h3>
          <p>Déjanos tus datos y pronto nos pondremos en contacto contigo.</p>
        </div>
      </div>

      <div className="modulo7-item">
        <div className="icon-container">
          <i className="fas fa-map-marker-alt"></i> {/* Replace with your icon */}
        </div>
        <div className="text-container">
          <h3>Ubica tu taller más cercano</h3>
          <p>Estés donde estés, encontramos el taller más cercano para tus revisiones o emergencias.</p>
        </div>
      </div>

      <div className="modulo7-item">
        <div className="icon-container">
          <i className="fas fa-store"></i> {/* Replace with your icon */}
        </div>
        <div className="text-container">
          <h3>Store</h3>
          <p>Permanece al día con todo sobre tu moto, piezas y accesorios para cada referencia.</p>
        </div>
      </div>

      <div className="modulo7-item">
        <div className="icon-container">
          <i className="fas fa-newspaper"></i> {/* Replace with your icon */}
        </div>
        <div className="text-container">
          <h3>Mantente Informado</h3>
          <p>Únete a la red Suzuki y actualízate sobre todas las novedades y productos para ti.</p>
        </div>
      </div>
    </div>
  );
}

export default Modulo7;