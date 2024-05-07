// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Componentes/Button";
import BarraMenu from "./Componentes/BarraMenu";
import BarraLateral from "./Componentes/BarraLateral";
import Article from "./Componentes/Article";
import Productos from "./views/Products/index";
import { useEffect, useState } from "react";
import Loading from "./Componentes/Loading";
import Boton from "./Componentes/Boton/Boton";
 import Home from "./views/Home/index";
import Contador from "./Componentes/Contador";
import Formulario from "./Componentes/Formulario";
import { BrowserRouter, HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0);
  // const [mostrar, setMostrar] = useState(false);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("MONTAJE");

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => {
  //     console.log("DESMONTAJE");
  //   };
  // }, []);

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/productos" element={<Productos/>}/>
  
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
