import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Cantidad de Click:</h3>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {contador}
      </button>
    </div>
  );
};
export default Contador;
