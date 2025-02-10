import React, { useState } from "react";
import { Link } from "react-router-dom";

function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="nav-container">
      <div className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </div>

      <ul className={menuAbierto ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuAbierto(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/especificaciones" onClick={() => setMenuAbierto(false)}>
            Especificaciones
          </Link>
        </li>
        <li>
          <Link to="/modulo3" onClick={() => setMenuAbierto(false)}>
            Mejora
          </Link>
        </li>
        <li>
          <Link to="/modulo4" onClick={() => setMenuAbierto(false)}>
            Aventura
          </Link>
        </li>
        <li>
          <Link to="/modulo5" onClick={() => setMenuAbierto(false)}>
            Estilo
          </Link>
        </li>
        <li>
          <Link to="/modulo6" onClick={() => setMenuAbierto(false)}>
            Diseño
          </Link>
        </li>
        <li>
          <Link to="/modulo7" onClick={() => setMenuAbierto(false)}>
            Información
          </Link>
        </li>
        <li>
          <Link to="/modulo8" onClick={() => setMenuAbierto(false)}>
            Repuestos
          </Link>
        </li>
        <li>
          <Link to="/contacto" onClick={() => setMenuAbierto(false)}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;
