import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import ItemCount from "./ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link  } from "react-router-dom";
import {Button} from "react-bootstrap";
import {useState} from "react";
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

  const {addItem} = useContext(cartContext);
  const [select, setSelect] = useState(false);

  const onAdd = (unidad) => {

    addItem(producto, unidad)
      if (unidad !== undefined) {
          setSelect(unidad);
        }
        toast.success("Añadiendo: " + unidad + " al carrito" , {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });  
  }

  return (
      <div className='centrarproducto'>
        <img src={producto.img} alt=""></img>
        <div className='descripcion'>
          <p className='nombre'>{producto.name}</p>
          <p className='material'>{producto.material}</p>
          <p className='color'>{producto.color}</p>
          <p className='precio'>${producto.precio}</p>
          {select ? (
              <Button variant="primary" as={Link} to="/Cart">Ir al carrito</Button>
        ) : (
          <ItemCount stock={producto.stock} onAdd={onAdd} init={1}/>
        )}
       </div>
       <ToastContainer/>
      </div>
)
}

export default ItemDetail