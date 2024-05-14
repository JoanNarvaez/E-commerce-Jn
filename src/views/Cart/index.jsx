import { useSelector } from "react-redux";
import BarraMenu from "../../Componentes/BarraMenu";
import "./Cart.css";

const renderizarProductos = (productos) => {
  return productos.map((producto) => (
  
    <li key={producto.id.toString()}>
    
      <h2>{producto.title} $ {producto.price}</h2>
      {/* <h3>$ {producto.price}</h3> */}
    </li>
  ));
};

const sumarPrecios = (productos) => {
  return productos.reduce((total, producto) => total + producto.price, 0);
};




const Carrito = () => {
  const productosAgregados = useSelector((estadoActualDelApp) => {
    console.log(estadoActualDelApp.carrito.productos);
    return estadoActualDelApp.carrito.productos;
  });

  const total = sumarPrecios(productosAgregados);

  console.log("AGREGADOS", productosAgregados);
  return (
    <div>
      <BarraMenu></BarraMenu>
      <h3>Carrito de compras</h3>
      
      <ul>{renderizarProductos(productosAgregados)}</ul>
      <p className="valor-a-pagar" >Valor a pagar: ${total.toFixed(2)}</p>  
    </div>
  );
};
export default Carrito;
