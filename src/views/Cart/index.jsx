import { useSelector } from "react-redux";
import BarraMenu from "../../Componentes/BarraMenu";

const renderizarProductos = (productos) => {
  return productos.map((producto) => (
    <li key={producto.id.toString()}>
      <h2>{producto.title}</h2>
    </li>
  ));
};

const Carrito = () => {
  const productosAgregados = useSelector((estadoActualDelApp) => {
    console.log(estadoActualDelApp.carrito.productos);
    return estadoActualDelApp.carrito.productos;
  });

  console.log("AGREGADOS", productosAgregados);
  return (
    <div>
      <BarraMenu></BarraMenu>
      <h3>Carrito de compras</h3>
      <ul>{renderizarProductos(productosAgregados)}</ul>
    </div>
  );
};
export default Carrito;
