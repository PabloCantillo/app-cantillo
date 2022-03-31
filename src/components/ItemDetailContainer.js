import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import ItemDetail from './ItemDetail'
import {query,getDocs,getDoc,doc,collection,where} from "firebase/firestore"
import { dbFirebase } from '../firebaseConfig';

export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    
   const docRef = doc(dbFirebase, 'Productos', id);
      getDoc(docRef)
      .then((res)=> setProducto(res.data()))
  },[id])
  console.log(producto)

  return(
      <div>
             <ItemDetail producto={producto}/>  
      </div>
  )
}

export default ItemDetailContainer