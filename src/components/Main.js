import {useState} from "react"


const Main = (props) => {
    
    const [contador, setContador] = useState(props.initial)

    const handleClick = () => {
         setContador(contador + 1)
     }
 
     const restar = () => {
         setContador(contador - 1)
     }
 
     const resetear = () => {
         setContador(0)
     }

     return (
        <main className="container">
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
            <p>Esto es una prueba del contador del sitio. Muchas gracias por utilizarlo. : {contador}</p>
            <button onClick={handleClick}>aumentar</button>
            <button onClick={resetear}>resetear</button>
            <button onClick={restar}>restar</button>
        </main>
    );
}

export default Main;