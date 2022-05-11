import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useCartContext } from "./context/CartContext"

function Item({prod}) {   
    
    const {idCart,setIdCart,createCart,postProduct} = useCartContext()
    const handlerButton =async ()=>{
        if(idCart)
        {
            let respuesta = await postProduct(idCart, prod)
            let respuesta2 = await respuesta.json()
        }
        else{
            let newId = await createCart()
            let respuesta = await postProduct(newId, prod)
            let respuesta2 = await respuesta.json()
            setIdCart(newId)
        }
    }


    return (
            <div className='cartaProducto'>  
                <Row>
                    <div className="imagenProducto">
                        <img src={prod.imagenUrl} alt="Imagen del producto" />    
                    </div>
                </Row>
                <Row>
                    <Col xs={6}>Producto: </Col>
                    <Col xs={6}>{prod.nombre} </Col>
                </Row>
                <Row>
                    <Col xs={12}>{prod.descripcion} </Col>
                </Row>
                <Row>
                    <Col xs={6}>Codigo: </Col>
                    <Col xs={6}>{prod.codigo}  </Col>
                </Row>
                <Row>
                    <Col xs={6}>Precio: </Col>
                    <Col xs={6}>{prod.precio} </Col>
                </Row>
                <Row>
                    <Col xs={6}>Stock: </Col>
                    <Col xs={6}>{prod.stock}</Col>
                </Row>
                <Row>
                    <Col xs={12}> 
                        <Button onClick={handlerButton} > Agregar al carrito</Button>
                    </Col>

                </Row>

            </div>
    )
}

export default Item