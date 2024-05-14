import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "../views/Home";
import Products from "../views/Products";
import Carrito from "../views/Cart";
import Productos from "../views/Productos/";
import Formulario from "../Componentes/Formulario";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="productos" element={<Products />} />
        <Route exact path="productos/:id" element={<Productos />} />
        <Route exact path="carrito" element={<Carrito />} />
        <Route exact path="formulario" element={<Formulario />} />

      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
