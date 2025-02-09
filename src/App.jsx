// src/App.jsx
import React from "react";
import "./App.css"; // If you have App.css
import BarraNavegacion from "./componentes/BarraNavegacion"; // Correct import path
import ComponentEspecificaciones from "./componentes/especificacion";
import EspecificacionesMoto3 from "./componentes/modulo3";
import EspecificacionesMoto4 from "./componentes/modulo4";
import Contacto from "./componentes/contacto";

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <ComponentEspecificaciones />
      <EspecificacionesMoto3 />
      <EspecificacionesMoto4 />
      <Contacto />
    </div>
  );
}

export default App;
