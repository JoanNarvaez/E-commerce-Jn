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
import Carrito from "./views/Cart/index";
import { BrowserRouter, HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/productos" element={<Productos/>}/>
   <Route exact path="/carrito" element={<Carrito/>}/>
  
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
