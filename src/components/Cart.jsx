import { Table } from "react-bootstrap"
import {  useEffect, useState } from "react"
import ItemCart from "./ItemCart"
import { useCartContext } from "./context/CartContext"
const Cart = () => {
  const {idCart,cart,getCart} = useCartContext()
  useEffect(async() => {
    let res = await getCart(idCart)
  }, [cart])
  return (
    <>
    <div className="container">

    </div>
    <div className="container">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Quitar</th>
    </tr>
  </thead>
  <tbody>
      {
         cart.map(producto =><ItemCart key={producto.id || producto._id} producto= {producto}/>)
      }
  </tbody>
</Table>
    </div>
  </>
  )

}

export default Cart