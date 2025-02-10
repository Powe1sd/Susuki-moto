import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/layout";
import ComponentEspecificaciones from "./componentes/especificacion";
import EspecificacionesMoto3 from "./componentes/modulo3";
import EspecificacionesMoto4 from "./componentes/modulo4";
import Contacto from "./componentes/contacto";
import Modulo5 from "./componentes/modulo5";
import Modulo6 from "./componentes/modulo6";
import Modulo7 from "./componentes/modulo7";
import FormularioSuzuki from "./componentes/modulo8";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta con Layout para mantener la estructura */}
        <Route path="/" element={<Layout />}>
          {/* Página de inicio con todos los módulos */}
          <Route
            index
            element={
              <div>
                <ComponentEspecificaciones />
                <EspecificacionesMoto3 />
                <EspecificacionesMoto4 />
                <Modulo5 />
                <Modulo6 />
                <Modulo7 />
                <FormularioSuzuki />
                <Contacto />
              </div>
            }
          />
          {/* Otras páginas que se cargan al hacer clic */}
          <Route
            path="especificaciones"
            element={<ComponentEspecificaciones />}
          />
          <Route path="modulo3" element={<EspecificacionesMoto3 />} />
          <Route path="modulo4" element={<EspecificacionesMoto4 />} />
          <Route path="modulo5" element={<Modulo5 />} />
          <Route path="modulo6" element={<Modulo6 />} />
          <Route path="modulo7" element={<Modulo7 />} />
          <Route path="modulo8" element={<FormularioSuzuki />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
