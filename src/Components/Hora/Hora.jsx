import { useEffect, useState } from 'react';

export const Hora = () => {
    const [ahora, setAhora] = useState(() => new Date());

    useEffect(() => {
        const intervalo = setInterval(() => setAhora(new Date()), 1000);
        return () => clearInterval(intervalo);
    }, []);

    const horaActual = new Intl.DateTimeFormat('es-ES', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }).format(ahora);

    return (
        <div className="hora">
            <p>Hora actual: {horaActual}</p>
        </div>
    );
}