import React from 'react'
import { GrCart} from "react-icons/gr";
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to="/Cart">
       <h1><a href=''><GrCart id="cartIcon"/></a></h1>
    </Link>
  )
  }

export default CartWidget