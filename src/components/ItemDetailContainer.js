import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import ItemDetail from './ItemDetail'

const productos =  [ 
  {id : 1, categoria: "sol" , name: "Ray-Ban Clubmaster", img:"../images/Clubmaster.jpg", precio: 29000, stock: 7},
  {id : 2, categoria: "sol" , name: "Ray-Ban Round", img:"../images/Round.jpg", precio: 21900, stock: 15},
  {id : 3, categoria: "sol" , name: "Ray-Ban Wayfarer", img:"../images/Wayfarer.jpg", precio: 22900, stock: 7},
  {id : 4, categoria: "sol" , name: "Paula Cahen D'anvers Sitges", img:"../images/Sitges.jpg", precio: 6500, stock: 15},
  {id : 5, categoria: "sol" , name: "Paula Cahen D'anvers Tripoli", img:"../images/Tripoli.jpg", precio: 7000, stock: 7},
  {id : 6, categoria: "receta" , name: "Vulk Brow", img:"../images/Brow.jpg", precio: 8500, stock: 11},
  {id : 7, categoria: "receta" , name: "Vulk Degre", img:"../images/Degre3.jpg", precio: 8300, stock: 6},
  {id : 8, categoria: "receta" , name: "Vulk Ruga", img:"../images/Ruga.jpg", precio: 8400, stock: 3},
  {id : 9, categoria: "receta" , name: "Rusty Ther", img:"../images/Ther.jpg", precio: 10100, stock: 6},
  {id : 10, categoria: "receta" , name: "Rusty Zinz", img:"../images/Zinz.jpg", precio: 8200, stock: 3},
  {id : 11, categoria: "contacto" , name: "Acuvue Oasys with Hydraclear", img:"../images/acuvueoasys.jpg", precio: 6000, stock: 7},
  {id : 12, categoria: "contacto" , name: "Acuvue Vita", img:"../images/acuvuevita.jpg", precio: 4500, stock: 15},
  {id : 13, categoria: "contacto" , name: "Bausch & Lomb Soflens Astigmatismo", img:"../images/Astigmatismosoft.jpg", precio: 7900, stock: 7},
  {id : 14, categoria: "contacto" , name: "Bausch & Lomb Soflens Multifocal", img:"../images/multisoft.jpg", precio: 9900, stock: 15},
  {id : 15, categoria: "contacto" , name: "Bausch & Lomb Soflens Starcolors", img:"../images/starcolor.jpg", precio: 5000, stock: 7},
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
            {
              loading ? <span> Cargando... </span> : <ItemDetail producto={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer