import React, { useEffect, useState } from 'react'

export const cartContext = React.createContext()

export const CartContext = ({children}) => {

    const {Provider} = cartContext
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    let cartProductAux = []


    useEffect(()=>{
      checkTotal()
    },[cart])

    const addItem = (item,quantity)=>{
      let cartProduct = {item,quantity};
      if(isInCart(item)){
        cartProduct = cart.find(p => p.item.id === item.id)
        cartProduct.quantity = cartProduct.quantity + quantity;
        cartProductAux = [...cart]
      }else{
         cartProductAux = [...cart,cartProduct]
      }
        setCart(cartProductAux)
    }

    const removeItem = (id)=>{
      cartProductAux = cart.filter(p => p.item.id !== id )
      console.log(cartProductAux)
      setCart(cartProductAux)
    }

    const clear= ()=>{
      setCart([])
    }

    const checkTotal = ()=>{

      let totalAux = 0;

       cart.map(p => {
        totalAux = p.item.precio * p.quantity
      })
      setTotal(totalAux)

    }
    const isInCart = (item)=>{
      const result = cart.some(p => p.item.id == item.id)

      return result
    }
  return (
    <Provider value={{cart,addItem,clear,removeItem,total}}>
        {children}
    </Provider>
  )
}

export default CartContext