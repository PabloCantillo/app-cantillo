import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'

export const Cart = () => {

    const {cart,total,removeItem} = useContext(cartContext)
    console.log(cart)
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            {
                cart.length > 0 ?
                <ul>
                   { cart.map(item => {
                      return <li>
                          <div>
                            <p>{item.item.nombre}</p>
                            <p>$ {item.item.precio}</p>
                          </div>
                            <div>
                                <p>Cantidad: {item.quantity}</p>
                                <button onClick={()=> removeItem(item.item.id)}>Eliminar</button>
                            </div>
                        </li>
                    })}
                    <div>
                        <div>
                            <p>Total</p>
                            <p> ${total} </p>
                        </div>
                        <p>Generar orden</p>
                        <Link to="/">
                            <p>o Continuar Comprando</p> 
                        </Link>
                    </div>
                </ul>
                :
                <div className='cart_vacio'>
                     <p>No hay productos en el carrito</p>
                     <Link to="/">Volver al home</Link>

                </div>
                
            }
        </div>
    )
}

export default Cart