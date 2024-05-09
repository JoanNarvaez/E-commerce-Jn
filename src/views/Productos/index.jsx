import { useEffect, useState } from "react";
import BarraMenu from "/src/Componentes/BarraMenu";
import "./Productos.css";
import Loading from "../../Componentes/Loading";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import accionesDelCarrito from "../../slicers/carrito";
import Button from "/src/Componentes/Button";


const Productos = () => {
  const { id } = useParams();

  const dipatch = useDispatch();

  const [producto, setProducto] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const handleAgregarAlCarrito = () => {
    console.log("Agregando al carrito", producto.id);
    dipatch(accionesDelCarrito.agregarAlCarrito(producto));
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducto(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      
      <BarraMenu></BarraMenu>
        <h1>JOAN ORDOÑEZ</h1>
        <h1>{producto.title}</h1>
      
      <img src={producto.image} style={{ width: 100, height: 100 }} />
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <p>{producto.category}</p>
      <Button onClick={() => handleAgregarAlCarrito()}>
        Agregar al carrito
      </Button>







        {/* <BarraMenu></BarraMenu>
        <h1>JOAN ORDOÑEZ</h1>
        <h1>{producto.title}</h1>
      
      <img src={producto.image} style={{ width: 100, height: 100 }} />
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <p>{producto.category}</p>
      <Button onClick={() => handleAgregarAlCarrito()}>
        Agregar al carrito
      </Button> */}
    </>
  );
};

export default Productos;
