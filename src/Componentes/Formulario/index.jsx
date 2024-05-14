import { useEffect, useState } from "react";
import BarraMenu from "../BarraMenu";
import "./Formulario.css";

const Formulario = () => {
  const [nombre, cambiarNombre] = useState("");
  const [password, cambiarPassword] = useState("");

  const [lista, setLista] = useState([]);

  const handleChangeName = (evento) => {
    const nuevoNombre = evento.target.value;
    cambiarNombre(nuevoNombre);
  };

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    if (name === "nombre") {
      cambiarNombre(value);
    }
    if (name === "password") {
      cambiarPassword(value);
    }
  };

  const handleChangePassword = (evento) => {
    const nuevoEma = evento.target.value;
    cambiarPassword(nuevoEma);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    evento.stopPropagation();
    setLista([...lista, `${nombre}-${password}`]);
    cambiarNombre("");
    cambiarPassword("");
  };

  useEffect(() => {
    // console.log("NOMBRE:", nombre);
    // setLista([...lista, nombre]);
    //debounce
  }, [nombre]);

  return (
    <>
      <BarraMenu></BarraMenu>
      <form className="login-form"
      
        onClick={() => {
          console.log("CLICK EN FORM");
        }}
      >
        <label>Usuario</label>
  <input
    onChange={handleChange}
    name="nombre"
    value={nombre}
    placeholder="Ingrese su Usuario..."
    type="text"
  />

  <label>Password</label>
  <input
    onChange={handleChange}
    name="password"
    value={password}
    placeholder="Ingrese su password..."
    type="password"
  />

  <input
    type="submit"
    value="Iniciar sesión"
    onClick={handleSubmit}
  />

  <div>
    {lista.map((el, idx) => (
      <p key={idx.toString()}>{el}</p>
    ))}
  </div>
</form>
      
    </>
  );
};

export default Formulario;
