import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main nombre="Pablo" apellido="Cantillo"/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App