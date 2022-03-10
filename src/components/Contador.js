import { useState , useEffect } from "react"

const Contador = () => {
        
    let [dark,setDark] = useState(false)
    
    const toggleDarkMode = () => {
        setDark(!dark)
    }
    
    
    return (
        <div>
            <h1>Contador</h1>
            <p>El tema del sitio es : {dark.toString()}</p>
            <p>Esto es una prueba del contador del sitio. Muchas gracias por utilizarlo. : 0</p>
            <button onClick={toggleDarkMode}>toggle dark mode</button>
        </div>
    )
}

export default Contador