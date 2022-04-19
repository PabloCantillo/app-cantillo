import './App.css';
import './components/Main.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Barradenavegacion  from './components/Barradenavegacion';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import  CartContext from './context/CartContext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Barradenavegacion/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        <Footer/>
        <ToastContainer/>
      </CartContext>
    </BrowserRouter>
  );
  }

export default App;
