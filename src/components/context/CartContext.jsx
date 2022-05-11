import {createContext, useContext,useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

  const [idCart,setIdCart] =useState('')
  const [cart,setCart] =useState([])
    const getCart= async (idCart)=>{
      if(idCart){
        let respuesta = await fetch(`https://light-comet-viscose.glitch.me/api/carrito/${idCart}/productos`,{
          method: 'GET'
      })
      let respuesta2 = await respuesta.json()
      return respuesta2       
      }
    }

    const fetchCart = async (idCart) =>{
      let newCart = await getCart(idCart)
      if(newCart){
        setCart(newCart)
      }
      return "cargado"
    }
    const createCart = async()=>{
      let respuesta = await fetch(`https://light-comet-viscose.glitch.me/api/carrito`,{
          method: 'POST',
          headers:{
              "Content-Type": "application/json"
          }
          
      })
      let resParsed = await respuesta.json()
      return `${resParsed}`
  }
  const postProduct = async (idToPost, producto)=>{
    let respuesta = await fetch(`https://light-comet-viscose.glitch.me/api/carrito/${idToPost}/productos`,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        producto: producto
      })
    })
    let cartList = await fetchCart(idToPost)
    return respuesta
}
  const removeFromCart = async (idProd) =>{
     let respuesta = await fetch(`https://light-comet-viscose.glitch.me/api/carrito/${idCart}/productos/${idProd}`,{
      method: 'DELETE'
    }) 
    let actualizar = await fetchCart(idCart)
  }

  return (
        <CartContext.Provider value={{
          idCart,
          setIdCart,
          cart,
          setCart,
          getCart,
          fetchCart,
          createCart,
          postProduct,
          removeFromCart
        }}>
          {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider