import "./BarraMenu.css";

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
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#catalago">Catalogo</a>
              </li>
              <li>
                <a href="#miCarrito">Mi Carrito</a>
              </li>
              <li>
                <a
                  href="https://wa.me/+573121234567"
                  target="_blank"
                  class="active"
                >
                  WhatsApp
                </a>
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
