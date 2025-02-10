// src/components/modulo6.jsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moto6Img1 from "../img/moto6.jpeg"; // Importa la imagen 1
import moto7Img2 from "../img/moto7.jpeg"; // Importa la imagen 2
import moto8Img3 from "../img/moto8.jpeg"; // Importa la imagen 3

function Modulo6() {
  return (
    <div className="especificaciones modulo6">
      <h2>Moto 6 - La Bestia</h2>
      <Carousel>
        <div>
          <img src={moto6Img1} alt="Moto 6 - Vista lateral" />{" "}
          {/* Usa la imagen importada */}
        </div>
        <div>
          <img src={moto7Img2} alt="Moto 7 - Motor" />{" "}
          {/* Usa la imagen importada */}
        </div>
        <div>
          <img src={moto8Img3} alt="Moto 8 - Tablero" />{" "}
          {/* Usa la imagen importada */}
        </div>
      </Carousel>

      <div className="especificaciones-grid">
        <div className="especificacion">
          <i className="fas fa-tachometer-alt"></i>
          <h3>Velocidad Máxima</h3>
          <p>299 km/h</p>
        </div>
        <div className="especificacion">
          <i className="fas fa-horse-head"></i>
          <h3>Potencia</h3>
          <p>200 CV</p>
        </div>
        <div className="especificacion">
          <i className="fas fa-weight"></i>
          <h3>Peso</h3>
          <p>180 kg</p>
        </div>
      </div>
    </div>
  );
}

export default Modulo6;
