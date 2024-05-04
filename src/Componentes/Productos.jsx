import "./Productos.css";

export default function Productos() {
  return (
    <div className="grid">
      <div className="gallery-image">
        <img src="src/assets/Img/port1.jpg" alt="" />
        {/* <h3>Diseño de Logo</h3> */}
        <h5>Añadir</h5>
      </div>

      <div className="gallery-image">
        <img src="src/assets/Img/port5.jpg" alt="" />
        {/* <h3>Desarrollo WEB</h3> */}
        <h5>Añadir</h5>
      </div>
      <div className="gallery-image">
        <img src="src/assets/Img/port6.jpg" alt="" />
        {/* <h3>Desarrollo WEB</h3> */}
        <h5>Añadir</h5>
      </div>
      <div className="gallery-image">
        <img src="src/assets/Img/port9.png" alt="" />
        {/* <h3>Desarrollo WEB</h3> */}
        <h5>Añadir</h5>
      </div>
    </div>
  );
}
