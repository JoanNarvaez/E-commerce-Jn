// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Componentes/Button";
import BarraMenu from "./Componentes/BarraMenu";
import BarraLateral from "./Componentes/BarraLateral";
import Article from "./Componentes/Article";
import Productos from "./Componentes/Productos";
import { useEffect, useState } from "react";
import Loading from "./Componentes/Loading";
import Boton from "./Componentes/Boton/Boton";
import Contador from "./Componentes/Contador";
import Formulario from "./Componentes/Formulario";

function App() {
  const [count, setCount] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("MONTAJE");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      console.log("DESMONTAJE");
    };
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
   
      <main>
        <BarraMenu></BarraMenu>

        <div className="sliderbtn">
          <BarraLateral titulo="Bienvenido! a JN" descripcion=""></BarraLateral>
          <Button
            onClick={() => {
              console.log("Hizo Click");

              setMostrar(!mostrar);
            }}
          >
            Productos
          </Button>
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
        <aside>{mostrar && <Productos></Productos>}</aside>

        <div>
          <footer>
            {/* <Contador></Contador> */}
            {/* <Formulario/> */}
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
