// src/App.jsx
import React from "react";
import "./App.css"; // If you have App.css
import BarraNavegacion from "./componentes/BarraNavegacion"; // Correct import path
import ComponentEspecificaciones from "./componentes/especificacion";
import EspecificacionesMoto3 from "./componentes/modulo3";
import EspecificacionesMoto4 from "./componentes/modulo4";
import Contacto from "./componentes/contacto";
import Modulo5 from "./componentes/modulo5";
import Modulo6 from "./componentes/modulo6";

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <ComponentEspecificaciones />
      <EspecificacionesMoto3 />
      <EspecificacionesMoto4 />
      <Modulo5 />
      <Modulo6 />
      {/* ultimo paso */}
      <Contacto />
    </div>
  );
}

export default App;
