import { useEffect, useState } from "react";
import BarraMenu from "/src/Componentes/BarraMenu";
import "./Productos.css";
import Loading from "../../Componentes/Loading";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import accionesDelCarrito from "../../slicers/carrito";



const Productos = () => {
  const { id } = useParams();

  const dipatch = useDispatch();

  const [producto, setProducto] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [contador, setContador] = useState(0);

  const handleAgregarAlCarrito = () => {
    console.log("Agregando al carrito", producto.id);
    dipatch(accionesDelCarrito.agregarAlCarrito(producto));
    setContador(contador + 1);
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
      <h1>JN</h1>
      <h1>{producto.title}</h1>

      <img src={producto.image} style={{ width: 100, height: 100 }} />
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <p>{producto.category}</p>
      <div className="container">
        <button
          className="button"
          onClick={() => {
            handleAgregarAlCarrito();
           
          }}
        >
          Agregar al carrito
          <svg className="cartIcon" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
          </svg>
        </button>
        
      </div>
      <p>Contador: {contador}</p>
    </>
  );
};

export default Productos;
