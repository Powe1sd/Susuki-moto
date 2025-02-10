// src/components/modulo5.jsx
import React from "react";
import img from "../img/img.jpeg"; // Ajusta la ruta si es necesario

function Modulo5() {
  return (
    <div className="especificaciones">
      <h2>Moto 5 - Estilo y Potencia</h2>
      <img src={img} alt="Motocicleta deportiva" />{" "}
      <p>
        La Moto 5 combina un diseño elegante con un rendimiento excepcional. Su
        motor de 600cc ofrece una potencia suave y progresiva, ideal tanto para
        la ciudad como para carreteras abiertas.
      </p>
      <ul>
        <li>
          <strong>Motor:</strong> 600cc, 4 cilindros en línea
        </li>
        <li>
          <strong>Potencia:</strong> 85 CV
        </li>
        <li>
          <strong>Peso:</strong> 190 kg
        </li>
      </ul>
    </div>
  );
}

export default Modulo5;
