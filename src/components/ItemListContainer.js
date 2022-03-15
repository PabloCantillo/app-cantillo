import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemList from "./ItemList"


let productosIniciales = [
    {
        id: 1,
        nombre: "Ray-ban Aviator",
        precio: 24000
    },
    {
        id: 2,
        nombre: "Carrera Black",
        precio: 15000
    },
    {
        id: 3,
        nombre: "Oakley Anorak",
        precio: 17000
    },
    {
        id: 4,
        nombre: "Ray-Ban ClubMaster",
        precio: 22000
    },
    {
        id: 5,
        nombre: "Vulk Wildy Denim",
        precio: 13000
    },
    {
        id: 6,
        nombre: "Tommy Hilfiger Ruthenium",
        precio: 15000
    }
]

const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    
    useEffect(()=>{
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },3000)
        })


        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })

    console.log(productos)

    return (
        <main className="container">
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
            <img src="/imagenes/logo192.png" />
            <p>La cantidad de productos es : 0</p>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ul>
                {productos.map((producto,indice)=>{
                    return <li>{producto.nombre}</li>
                })}
            </ul>
            <Contador />
        </main>
    );
}

export default ItemListContainer