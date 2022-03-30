import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'
import {Button} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./estilosComponentes.scss"

export const Cart = () => {

    const finalizarCompra = () => {
        toast.success("Compra realizada" , {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });  
    }
    
    const {cart,total,removeItem} = useContext(cartContext)
    console.log(cart)
    return (
        <div className='cart'>
            <h2>Detalle del pedido</h2>
            {
                cart.length > 0 ?
                <ul>
                   { cart.map((item, index) => {
                      return <li key={index} className='cartcontainer'>
                          <div>
                            <p className='cartnombre'>{item.item.name}</p>
                            <p className='caracteristicas'>$ {item.item.precio}</p>
                          </div>
                            <div>
                                <p className='caracteristicas'>Cantidad: {item.quantity}</p>
                                <Button variant='danger' onClick={()=> removeItem(item.item.id)}>Eliminar</Button>
                            </div>
                        </li>
                    })}
                    <div>
                        <div>
                            <p className='caracteristicas'>TOTAL: ${total} </p>
                        </div>
                        <Button variant='success' onClick={finalizarCompra}>Finalizar compra</Button>
                        <Button variant='primary' as={Link} to="/"> Continuar comprando</Button>
        
                    </div>
                </ul>
                :
                <div className='caracteristicas'>
                     <p>No se registra productos seleccionados</p>
                     <Link className='acomodar' to="/" >Volver al home</Link>
                </div>
                
            }
            <ToastContainer/>
        </div>
    )
}


export default Cart

