import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import { Link  } from "react-router-dom";
import {Button} from "react-bootstrap";
import {useState} from "react";

const ItemDetail = ({producto}) => {

    const [select, setSelect] = useState(false);
 
    const onAdd = (unidad) => {
        if (unidad !== undefined) {
            setSelect(unidad);
          }
          toast.success("Añadido: " + unidad + " al carrito");
        };

    return (
        <div>
            <p>{producto[0].name}</p>
            <p>${producto[0].precio}</p>
            <img src={producto[0].img}></img>
            {select ? (
                <Button variant="primary" as={Link} to="/Cart">Ir al carrito</Button>
          ) : (
            <ItemCount stock={producto[0].stock} onAdd={onAdd} init={1}/>
          )}
            
        </div>
)
}

export default ItemDetail