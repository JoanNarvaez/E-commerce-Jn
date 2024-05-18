import React from "react";
import "./BarraMenu.css";
import { Link } from "react-router-dom";
import BotonLogin from "./Boton/BotonLogin";

export default function BarraMenu() {
  return (
    <header className="header-container">
      <nav>
        <div className="container">
          <div>
            <img src="/src/assets/img/LogoJn.png" alt="Logo" className="logo" />
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/productos">Catalogo</Link>
              </li>
              <li>
                <Link to="/carrito">Mi Carrito</Link>
              </li>
              <li>
                <Link to="https://wa.me/+573207336756" target="_blank">
                  WhatsApp
                </Link>
              </li>
              <li>
                <BotonLogin></BotonLogin>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
