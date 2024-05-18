import { useDispatch, useSelector } from "react-redux";
import BarraMenu from "../../Componentes/BarraMenu";
import "./Cart.css";
import accionesDelCarrito from "../../slicers/carrito";
import { Link } from "react-router-dom";

const renderizarProductos = (productos, handleEliminar) => {
  return productos.map((producto) => (
    <li key={producto.id.toString()}>
      <h2>
        {producto.cantidad} X {producto.title} $ {producto.price}
        <button
          className="btn-eliminar"
          onClick={() => handleEliminar(producto.id)}
          title="Eliminar"
        >
          X
        </button>
      </h2>
    </li>
  ));
};

// const sumarPrecios = (productos) => {
//   return productos.reduce((total, producto) => total + producto.price, 0);
// };

const sumarPrecios = (productos) => {
  return productos.reduce(
    (total, producto) => total + producto.price * producto.cantidad,
    0
  );
};

const Carrito = () => {
  const productosAgregados = useSelector(
    (estadoActualDelApp) => estadoActualDelApp.carrito.productos
  );
  const dispatch = useDispatch();

  const handleEliminar = (productoId) => {
    dispatch(accionesDelCarrito.eliminarDelCarrito(productoId));
  };

  const total = sumarPrecios(productosAgregados);

  console.log("AGREGADOS", productosAgregados);
  return (
    <div>
      <BarraMenu></BarraMenu>
      <h3>Carrito de compras</h3>

      {/* <ul>{renderizarProductos(productosAgregados)}</ul> */}
      <ul>{renderizarProductos(productosAgregados, handleEliminar)}</ul>
      <p className="valor-a-pagar">Valor a pagar: ${total.toFixed(2)}</p>
      <Link to="/page">Pagar</Link>
    </div>
  );
};
export default Carrito;
