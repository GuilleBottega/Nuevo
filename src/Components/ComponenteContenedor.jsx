import { Item } from "./Item";

export const ComponenteContenedor = () => {
   const personas = { nombre: 'Juan', edad: 25 };

   const personas2 = [
      { nombre: 'Pedro', edad: 30 },
      { nombre: 'Maria', edad: 28 }
   ];

   const animales = ['Perro', 'Gato', 'Pajaro', 'Tortuga'];
   
   return (
      <section>
        <p>Este es un componente contenedor que contiene personas.</p>
         <Item {...personas} />

         <p>Este es un componente contenedor que contiene personas2.</p>
         {personas2.map((persona, index) => (
            <li key={index} >{persona.nombre}, {persona.edad} años</li>
         ))}

         <p>Este es un componente contenedor que contiene animales.</p>
         <ul>
            {animales.map((animal, index) => (
               <li key={index}>{animal}</li>
            ))}
         </ul>
      </section>
   );
}