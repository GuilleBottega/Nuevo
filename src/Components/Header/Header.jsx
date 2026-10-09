import { CambioModo } from '../CambioModo/CambioModo';
import Contador from '../Contador/Contador';
import Contraseña from '../Contraseña/Contraseña';

import './Header.css';
export const Header = ({ modoOscuro, onCambiarModo }) => {
    return (
        <>
        
        <header className="header">    
            <CambioModo
                modoOscuro={modoOscuro}
                onCambiarModo={onCambiarModo}
            />
            <Contador />
            <Contraseña />
               
        </header>

        
        </>
    );
}