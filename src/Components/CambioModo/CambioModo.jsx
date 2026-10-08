import './CambioModo.css';

export const CambioModo = ({ modoOscuro, onCambiarModo }) => (
    <button
        className="cambio-modo"
        type="button"
        aria-pressed={modoOscuro}
        onClick={onCambiarModo}
    >
        Activar modo {modoOscuro ? 'claro' : 'oscuro'}
    </button>
);