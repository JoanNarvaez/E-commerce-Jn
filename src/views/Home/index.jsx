import React from "react";
import Button from "/src/Componentes/Button";
import BarraMenu from "/src/Componentes/BarraMenu";
import BarraLateral from "/src/Componentes/BarraLateral";
import Article from "/src/Componentes/Article";
import Productos from "/src/views/Products/index";
import Boton from "/src/Componentes/Boton/Boton";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// import { useEffect, useState } from "react";
// const [mostrar, setMostrar] = useState(false);

const Home = () => {
  return (
    <main>
      <BarraMenu></BarraMenu>

      <div className="sliderbtn">
        <BarraLateral titulo="Bienvenido! a JN" descripcion=""></BarraLateral>
        <Link to="/productos">
          <Button
            onClick={() => {
              console.log("Hizo Click");
            }}
          >
            Productos
          </Button>
        </Link>
      </div>

      <Article>
        Bienvenido a nuestra plataforma de servicios tecnológicos, donde nos
        dedicamos a proporcionar soluciones innovadoras para satisfacer todas
        tus necesidades digitales.
        <Boton
          onClick={() => {
            alert(
              "Ingresa al botón de Whatsapp para comunicarte con nuestros asesores y te puedan brindar la información que buscas."
            );
          }}
        >
          Solicitar Asesoría
        </Boton>
      </Article>
      <aside></aside>

      <div>
        <footer>
          {/* <Contador></Contador>
            <Formulario/> */}
        </footer>
      </div>
    </main>
  );
};
export default Home;
