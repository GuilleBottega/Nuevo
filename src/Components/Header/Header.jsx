
import { CambioModo } from '../CambioModo/CambioModo';
import Contador from '../Contador/Contador';
import './Header.css';
export const Header = ({ modoOscuro, onCambiarModo }) => {
    return (
        <>
        <header className="header">    
            <CambioModo
                modoOscuro={modoOscuro}
                onCambiarModo={onCambiarModo}
            />
          
        </header>
        <Contador />
        </>
    );
}