import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"


function App () {
    const edad = 27
    const usuarios = ["Roberto", "Alex", "Juana"]
    const miOnAdd = () => {}

    return (
        <>
            <NavBar/>
            <Main nombre="Pablo" apellido="Cantillo" onAdd={miOnAdd} edad={edad} usuarios={usuarios} initial={1}>
                <p>Hola Mundo</p>
                <p>Hola Mundo Dos</p>
            </Main>
            <Footer/>
        </>
    )
} 

export default App