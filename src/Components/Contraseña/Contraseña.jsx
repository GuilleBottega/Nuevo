import { useState } from 'react';
import './Contraseña.css';

const Contraseña = () => {
    const [password, setPassword] = useState('');       
    const [mostrar, setMostrar] = useState(false);

  return (
    <div className="contrasena">
        <h1>Contraseña</h1>
        <div className="contrasena__campo">
            <input
                type={mostrar ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
            />
            <button
                className="contrasena__alternar"
                type="button"
                onClick={() => setMostrar((visible) => !visible)}
                aria-label={mostrar ? "Ocultar contraseña" : "Mostrar contraseña"}
                aria-pressed={mostrar}
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {mostrar ? (
                        <>
                            <path d="M3 3l18 18" />
                            <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                            <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.3 4.3 9.5 6.2a1.5 1.5 0 0 1 0 1.6 14 14 0 0 1-3.1 3.5" />
                            <path d="M6.2 6.2a14 14 0 0 0-3.7 5 1.5 1.5 0 0 0 0 1.6C3.7 14.7 7 19 12 19a10.8 10.8 0 0 0 2.1-.2" />
                        </>
                    ) : (
                        <>
                            <path d="M2.5 12s3.3-7 9.5-7 9.5 7 9.5 7-3.3 7-9.5 7-9.5-7-9.5-7Z" />
                            <circle cx="12" cy="12" r="3" />
                        </>
                    )}
                </svg>
            </button>
        </div>
    </div>
  );
};
export default Contraseña;