import { useState } from 'react';
import './Contador.css';


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
    <section className="contador">
      <h3 className="contador__titulo">Contador</h3>
      <p className="contador__valor" aria-live="polite" style={{ color: 'red' }}>
        {Contador}
      </p>
      <div className="contador__acciones">
        <button className="contador__boton contador__boton--principal" onClick={Sumar}>
        Incrementar
        </button>
        <button className="contador__boton" onClick={Restar} disabled={Contador === 0}>
        Decrementar
        </button>
      </div>
      <div className="contador__visibilidad">
        <p className="contador__etiqueta">Estado para mostrar</p><br></br>
        <button className="contador__boton contador__boton--alternativo" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'}
        </button>
        {mostrar && <p className="contador__valor contador__valor--secundario">{Contador}</p>}
      </div>
    </section>
  );
}

export default Contador;