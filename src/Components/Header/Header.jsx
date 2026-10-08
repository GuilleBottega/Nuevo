import { Hora } from '../Hora/Hora';
import { CambioModo } from '../CambioModo/CambioModo';
import './Header.css';

export const Header = ({ modoOscuro, onCambiarModo }) => {
    return (
        <header className="header">    
            <CambioModo
                modoOscuro={modoOscuro}
                onCambiarModo={onCambiarModo}
            />
           
        </header>
    );
}