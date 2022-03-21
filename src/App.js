import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart" 


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App