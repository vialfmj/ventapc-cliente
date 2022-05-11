import { useEffect } from "react"
import Item from "./Item"
const ItemList = ({products}) => {
useEffect(() => {
}, [products])


  return (
            <>
                <div className='contenedorLista'>
                    {products.map(prod=><Item key={prod.id||prod._id} prod={prod}/>)}
                </div>
            </>
        )
        }
    

export default ItemList