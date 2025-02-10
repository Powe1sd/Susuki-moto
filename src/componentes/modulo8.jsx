import React, { useState } from "react";

function FormularioSuzuki() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [moto, setMoto] = useState("");
  const [anio, setAnio] = useState("");
  const [repuestos, setRepuestos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [distribuidor, setDistribuidor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, 
    // por ejemplo, enviar los datos a un servidor.
    console.log("Formulario enviado:", {
      nombre,
      apellidos,
      celular,
      email,
      moto,
      anio,
      repuestos,
      ciudad,
      departamento,
      distribuidor,
    });
  };

  return (
    <form className="formulario-suzuki" onSubmit={handleSubmit}>
      <h2>REPUESTOS, LUBRICANTES, LLANTAS Y ACCESORIOS</h2>

      <div className="campo">
        <label htmlFor="nombre">*NOMBRE</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="apellidos">*APELLIDOS</label>
        <input
          type="text"
          id="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="celular">*CELULAR</label>
        <input
          type="tel"
          id="celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="email">*E-MAIL</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="moto">-- Seleccione una moto --</label>
        <select
          id="moto"
          value={moto}
          onChange={(e) => setMoto(e.target.value)}
          required
        >
          <option value="">-- Seleccione una moto --</option>
          {/* Aquí puedes agregar las opciones de motos */}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="anio">Año</label>
        <select
          id="anio"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        >
          <option value="">Año</option>
          {/* Aquí puedes agregar las opciones de años */}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="repuestos">
          *REPUESTOS, LUBRICANTES, LLANTAS Y ACCESORIOS
        </label>
        <select
          id="repuestos"
          value={repuestos}
          onChange={(e) => setRepuestos(e.target.value)}
          required
        >
          <option value="">
            -- Seleccione una opción --
          </option>
          {/* Aquí puedes agregar las opciones de repuestos */}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="ciudad">*SELECCIONE UNA CIUDAD</label>
        <select
          id="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          required
        >
          <option value="">-- Seleccione una ciudad --</option>
          {/* Aquí puedes agregar las opciones de ciudades */}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="departamento">*SELECCIONE UN DEPARTAMENTO</label>
        <select
          id="departamento"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
          required
        >
          <option value="">-- Seleccione un departamento --</option>
          {/* Aquí puedes agregar las opciones de departamentos */}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="distribuidor">*SELECCIONE UN DISTRIBUIDOR</label>
        <select
          id="distribuidor"
          value={distribuidor}
          onChange={(e) => setDistribuidor(e.target.value)}
          required
        >
          <option value="">-- Seleccione un distribuidor --</option>
          {/* Aquí puedes agregar las opciones de distribuidores */}
        </select>
      </div>

      <div className="campo-checkbox">
        <input type="checkbox" id="politica-datos" required />
        <label htmlFor="politica-datos">
          Al ingresar tus datos personales, autorizas el tratamiento de los
          mismos conforme a las finalidades establecidas en nuestra{" "}
          <a href="#">Política De Protección De Datos Personales</a> y{" "}
          <a href="#">Habeas Data</a>.
        </label>
      </div>

      <div className="campo-checkbox">
        <input type="checkbox" id="no-robot" required />
        <label htmlFor="no-robot">No soy un robot</label>
      </div>

      <button type="submit">ENVIAR</button>
    </form>
  );
}

export default FormularioSuzuki;