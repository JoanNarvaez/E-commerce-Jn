import "./BarraLateral.css";
import Button from "./Button";
// export default function BarraLateral() {

const BarraLateral = ({ titulo, descripcion }) => {
  return (
    <aside>
      <div className="bienvenido">
        {/* <h1 className="header-title ">Bienvenido! a JN </h1> */}
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </div>
    </aside>
  );
};
export default BarraLateral;
