import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import {query,getDocs,getDoc,doc,collection,where} from "firebase/firestore"
import { dbFirebase } from '../firebaseConfiguracion';

export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const {id} = useParams()

  useEffect(()=>{

  const q = query(collection(dbFirebase,"Productos"),where("id","==",id))

  getDocs(q)
  .then((resp)=> setProducto(resp.docs.map(p => ({producto:p.data()}))))
  .catch((err)=> console.log(err))
    
   const docRef = doc(dbFirebase, 'Productos', id);
      getDoc(docRef)
      .then((res)=> setProducto(res.data()))
  },[id])

  return(
      <div>
             <ItemDetail producto={producto}/>  
      </div>
  )
}

export default ItemDetailContainer