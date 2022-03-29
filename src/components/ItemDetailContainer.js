import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemDetail from './ItemDetail'

const productos =  [ 
  {id : 1, categoria: "sol" , name: "Ray-Ban D10S", img:"../images/1.jpg", precio: 13000, stock: 7},
  {id : 2, categoria: "sol" , name: "Vulk Denim", img:"../images/2.jpeg", precio: 10000, stock: 15},
  {id : 3, categoria: "sol" , name: "Ray-Ban Geisha", img:"../images/3.jpg", precio: 14000, stock: 7},
  {id : 4, categoria: "receta" , name: "Vulk Trueno", img:"../images/4.jpg", precio: 7000, stock: 11},
  {id : 5, categoria: "receta" , name: "Carrera Light", img:"../images/5.jpg", precio: 9000, stock: 6},
  {id : 6, categoria: "receta" , name: "D&G Bella", img:"../images/6.jpg", precio: 10000, stock: 3},
  {id : 7, categoria: "contacto" , name: "Acuvue Oasys with Hydraclear", img:"../images/7.jpg", precio: 6000, stock: 7},
  {id : 8, categoria: "contacto" , name: "Acuvue Moist", img:"../images/8.jpeg", precio: 4000, stock: 15},
  {id : 9, categoria: "contacto" , name: "Acuvue Oasys with Hydraluxe", img:"../images/9.jpg", precio: 5500, stock: 7},
]

const productosPromise = new Promise((resolve,rej)=>{

    setTimeout(() => {
      resolve(productos)
    }, 3000);
  })

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    console.log(id)
    const getItem = ()=>{
        return productosPromise
    }

    useEffect(()=>{
      getItem()
        .then((resolve) => {
          setProducto(resolve.filter(p=> p.id == id))
          setLoading(false)
      })
      
      .catch(toast.error("Error al intentar cargar los productos"))
     },[id])
     console.log(producto)


    return(
        <div>
            {loading ? <span> Cargando... </span> : <ItemDetail producto={producto}/>}
        </div>
    )
}

export default ItemDetailContainer