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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="productos" element={<Products />} />
        <Route exact path="productos/:id" element={<Productos />} />
        <Route exact path="carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
