import React, { useContext , useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../context/CartContext'
import {Button} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cart.css"
import { addDoc, collection } from 'firebase/firestore'
import { dbFirebase } from '../firebaseConfiguracion'


export const Cart = () => {

    
    const {cart,total,removeItem,clear} = useContext(cartContext)

    const [UserForm, setUserForm] = useState({
        nombre: "",
        email: ""
    })

    const navigate = useNavigate()

    const {nombre,email} = UserForm

    const handleInputChange = (e)=>{

        setUserForm({
            ...UserForm,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = (e)=>{
        e.preventDefault()

        const orden = {
            buyer: UserForm,
            items:cart,
            date: Date.now(),
            total
        }

        addDoc(collection(dbFirebase, "orders"), orden)
        .then((data)=> {
            toast.success('Muchas gracias por elegirnos.  El número de su orden es:' + data.id , {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            clear()
            navigate("/")
        })
        .catch((err)=> console.log(err))

    }
    
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            {
                cart.length > 0 ?
                <div className='col-md-8'>
                    <ul>
                    { cart.map((item, index) => {
                        return <li key={index} className='cartcontainer'>
                            <div>
                                <p className='cartnombre'>{item.item.name}</p>
                                <p className='caracteristicas'>$ {item.item.precio}</p>
                            </div>
                                <div>
                                    <p className='caractetisticas'>Cantidad: {item.quantity}</p>
                                    <Button variant='danger' onClick={()=> removeItem(item.item.id)}>Eliminar</Button>
                                </div>
                            </li>
                        })}
                        <div>
                            <div>
                                <p className='caracteristicas'>Total</p>
                                <p className='caracteristicas'>TOTAL: ${total}</p>
                            </div>
                            
                            <form onSubmitCapture={createOrder}>
                              <h4>Formulario de contacto</h4>
                              <div className='caracteristicas'>
                                 <label>Nombre:</label>
                                 <input name="nombre" value={nombre} type="text" placeholder='Ingrese el nombre' required autoFocus onChange={handleInputChange} />
                              </div>
                              <div className='caracteristicas'>
                                 <label>Email:</label>
                                 <input name="email" value={email} type="email" placeholder='Ingrese el Correo' required onChange={handleInputChange}/>
                              </div>
                              <Button type='submit' variant='success'>Generar orden</Button>
                              <Button variant='primary' as={Link} to="/"> Continuar comprando</Button>
                            </form>
                        </div>
                    </ul>
                </div>
                :
                <div className='caracteristicas'>
                     <p>No hay productos en el carrito</p>
                     <Link className='acomodar' to="/">Volver al home</Link>

                </div>                
            }
            <ToastContainer/>
        </div>
    )
}


export default Cart