import React, { useContext } from 'react'
import { GrCart} from "react-icons/gr";
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'

function CartWidget() {
  const {cart} = useContext(cartContext)
  return (
    <Link to="/Cart">
      <h1><a href=''><GrCart id="cartIcon"/>{cart.length}</a></h1>
    </Link>
  )
  }

export default CartWidget
