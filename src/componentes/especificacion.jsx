import moto1 from "../img/moto1.jpeg"; // Ajusta la ruta si es necesario
import React from "react";

function ComponentEspecificaciones() {
  return (
    <div className="especificaciones">
      <h2>Especificaciones</h2>
      <p>
        La moto es una motocicleta deportiva de alto rendimiento con un motor de
        1000 cc y una potencia de 200 caballos de fuerza. Está equipada con un
        sistema de frenos ABS, suspensión ajustable y un chasis ligero y ágil.
      </p>
      <img src={moto1} alt="Motocicleta deportiva" />{" "}
      {/* Usa la variable importada */}
      <p>
        La moto está disponible en una variedad de colores, incluyendo rojo,
        negro y blanco. También hay una variedad de opciones de personalización
        disponibles, como llantas de aleación, escape deportivo y carenados
        personalizados.
      </p>
      <p>
        La moto es una excelente opción para los conductores que buscan una
        experiencia de conducción emocionante y emocionante. Es perfecta para
        viajes largos y viajes por carretera, así como para conducción urbana.
      </p>
    </div>
  );
}

export default ComponentEspecificaciones;
