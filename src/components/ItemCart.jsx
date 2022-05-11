import {Button} from 'react-bootstrap'
import { useContext, useEffect } from 'react'
import { useCartContext } from './context/CartContext'
const ItemCart = ({producto}) => {
    const {removeFromCart} = useCartContext()
    useEffect(() => {
        
    }, [producto])
    
    return (
        <>
            <tr>
                <td>
                    {producto.nombre}
                </td>
                <td>
                    {producto.precio}
                </td>
                <td>
                    cantidad
                </td>
                <td>
                    <Button
                        onClick={()=>{
                            removeFromCart(producto.id || producto._id)
                        }}
                    >
                        X</Button>
                </td>
            </tr>

        </>
    )
}

export default ItemCart