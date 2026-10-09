import { useState } from 'react';
import './CambioNombre.css';

export default function CambioNombre() {
  const [nombre, setNombre] = useState('Juan');

  const cambiarNombre = () => {
    setNombre((nombreActual) => (nombreActual === 'Juan' ? 'Pedro' : 'Juan'));
  };

  return (
    <div className="cambio-nombre">
      <h1>Cambio de Nombre</h1>
      <p>Nombre actual: {nombre}</p>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
}