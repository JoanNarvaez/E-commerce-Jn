import React from "react";
import BarraMenu from "/src/Componentes/BarraMenu";
import { useEffect, useState } from "react";
import Loading from "../../Componentes/Loading";
import { Link } from "react-router-dom";
import Button from "../../Componentes/Button";
import "./Products.css";

const Products = () => {
  // const [count, setCount] = useState(0);
  // const [mostrar, setMostrar] = useState(false);
  const [lista, setLista] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("MONTAJE");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setLista(json));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      console.log("DESMONTAJE");
    };
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
<main>
  <BarraMenu></BarraMenu>
  <h1>JOAN ORDOÑEZ</h1>
  <h1>Lista de productos</h1>

  <ul className="lista-productos">
    {lista.map((elemento) => (
      <li key={elemento.id.toString()} className="tarjeta-producto">
        <h3>{elemento.title}</h3>
        <img src={elemento.image} alt={elemento.title} className="imagen-producto" />
        <p>{elemento.category}</p>
        <Button>
          <Link to={`/productos/${elemento.id}`}>Ver producto</Link>
        </Button>
      </li>
    ))}
  </ul>

</main>
    
  );
};
export default Products;
