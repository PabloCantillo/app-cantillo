import { useState } from "react"
import {Button} from "react-bootstrap";
import './ItemCount.css';

    const ItemCount = (props) => {

        const [contador, setContador] = useState(props.init)
    
        const sumar = () => {
    
            if(contador < props.stock){
                setContador(contador + 1) 
            }
        }
    
        const restar = () => {
            
            if( contador > 1){
                setContador(contador - 1)
            }
        }
        
        const addToCart = () => {
            setContador(props.init)
            props.onAdd(contador)
            }
    
        return (
            <div>
                <h3>{props.name}</h3>
                <h6>Stock disponible: {props.stock}</h6>
                <Button variant="success" onClick={sumar}>+</Button>{' '}
                <span init={props.init}>{contador}</span>
                <Button variant="danger" onClick={restar}>-</Button>
                <div>
                   <Button variant="primary" onClick={addToCart}>Añadir al carrito</Button>{' '}
                </div>
            </div>
        )
}    

export default ItemCount
