import "./BarraMenu.css";
import { Link } from "react-router-dom";
export default function BarraMenu() {
  return (
    <header className="header-container">
      <nav>
        <div className="container">
          <div>
            <img src="src/assets/Img/LogoJn.png" alt="Logo" className="logo" />
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">
                  <a href="">Home</a>
                </Link>
              </li>

              <li>
                <Link to="productos">
                  <a href="">Catalogo</a>
                </Link>
              </li>
              <li>
                <Link to="carrito">
                  <a href="">Mi Carrito</a>
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/+573207336756" target="_blank">
                  <a class="active">WhatsApp</a>
                </Link>
              </li>
              <li>
                <a target="_blank" className="">
                  <img
                    src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                    alt="perfil"
                    className="perfil"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
