import React from 'react'
import { GiShoppingCart} from "react-icons/gi";
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to="/Cart">
       <h1><a href=''><GiShoppingCart id="cartIcon"/></a></h1>
    </Link>
  )
  }

export default CartWidget