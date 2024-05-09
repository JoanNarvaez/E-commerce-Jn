import "./BarraMenu.css";
import { Link } from "react-router-dom";
export default function BarraMenu() {
  return (
    <header className="header-container">
      <nav>
        <div className="container">
          <div>
            <img src="/src/assets/Img/LogoJn.png" alt="Logo" className="logo" />
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li> 

              <li>
                <Link to="/productos">
                  Catalogo
                </Link>
              </li>
              <li>
                <Link to="/carrito">
                  Mi Carrito
                </Link>
              </li>
              <li>
                <Link  to="https://wa.me/+573207336756" target="_blank">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link  target="_blank" className="_blank">
                  <img
                    src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                    alt="perfil"
                    className="perfil"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
