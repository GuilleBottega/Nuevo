import React, { useState } from 'react';


function Contador() {
  const [Contador, setContador] = useState(0); 
  const [mostrar, setMostrar] = useState(true);

  const Sumar = () => {
  setContador(Contador + 1);
}
  const Restar = () => {
    if (Contador > 0) {
  setContador(Contador - 1);
}
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>{Contador}</p>
      <button onClick={Sumar}>
        Incrementar
      </button>
      <button onClick={Restar} disabled={Contador === 0}>
        Decrementar
      </button>
      <p>Estado para mostrar</p>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'}
      </button>
      {mostrar && <p>{Contador}</p>}
    </div>
  );
}

export default Contador;