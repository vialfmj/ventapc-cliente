import { useState, useEffect } from "react"
import ItemList from "./ItemList"
const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  
  const getProductsAW = async ()=>{
    const url = "https://light-comet-viscose.glitch.me/api/productos"
    let respuesta = await fetch(url)
    let productos = await respuesta.json()
    setProducts(productos)
    return
  }
  useEffect(() => {
     getProductsAW()
  }, [])

    
    
  
  
    return (
    <>
    <div className="container titulo">
        <h2>Listado de Productos</h2>
    </div>
    <div>
        <ItemList products= {products}/>
    </div>
    </>
  )
}

export default ItemListContainer