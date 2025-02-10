import React from "react";
import { Outlet } from "react-router-dom";
import BarraNavegacion from "./BarraNavegacion";

function Layout() {
  return (
    <div>
      <BarraNavegacion />
      <Outlet /> {/* Aquí se mostrarán las páginas según la ruta */}
    </div>
  );
}

export default Layout;
