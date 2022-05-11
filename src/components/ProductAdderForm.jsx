import { useState } from "react"
const ProductAdderForm = () => {
    const [formData, setFormData]=useState({
        nombre:'',
        descripcion: '',
        codigo:'',
        imagenUrl:'',
        precio:'',
        stock:''

    })
    const [dataToUpdate, setDataToUpdate] = useState({
        nombre:'',
        descripcion: '',
        codigo:'',
        imagenUrl:'',
        precio:'',
        stock:'',
        id: ''
    })
    const [idToDelete,setIdToDelete] = useState({
        id: ''
    })
    const handlerChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setDataToUpdate({
            ...dataToUpdate,
            [e.target.name]: e.target.value
        })
        setIdToDelete({
            ...idToDelete,
            [e.target.name]: e.target.value
        })
    }
    const postData = async(adminToPost)=>{
        let respuesta = await fetch('https://light-comet-viscose.glitch.me/api/productos',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
    
            body: JSON.stringify({
                    admin: adminToPost,
                    producto: formData
                }
            )
        })
        return respuesta.json()


    }
    const enviar = async (e)=>{
        e.preventDefault()
        let admin = false
        let respuesta = await postData(admin)
        console.log(respuesta)
    }
    const enviarAdmin =async (e)=>{
        e.preventDefault()
        try {
            let admin = true
            let respuesta = await postData(admin)
            console.log(respuesta)
            
        } catch (error) {
            console.log(error)
        }
    }
    const modificar= async(e)=>{
        e.preventDefault()
        let admin= false
        let respuesta = await updateData(admin)
        console.log(respuesta)

    }
    const modificarAdmin= async(e)=>{
        e.preventDefault()
        let admin= true
        let respuesta = await updateData(admin)
        console.log(respuesta)
    }
    const updateData = async (adminToPut)=>{
        let respuesta = await fetch(`https://light-comet-viscose.glitch.me/api/productos/${dataToUpdate.id}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({
                admin: adminToPut,
                producto: dataToUpdate
            }
            )
        })
        return respuesta.json()
    }
    const eliminar = async (e)=>{
        e.preventDefault()
        let admin = false
        let respuesta = await deleteProduct(admin)
        console.log(respuesta)


    }
    const eliminarAdmin = async (e)=>{
        e.preventDefault()
        let admin = true
        let respuesta = await deleteProduct(admin)
        console.log(respuesta)

    }
    const deleteProduct = async (adminToSend)=>{
        let respuesta = await fetch(`https://light-comet-viscose.glitch.me/api/productos/${idToDelete.id}`,{
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                admin: adminToSend
            })
        })
        return respuesta.json()
    }

  return (
      <>
        <div className="container titulo">
            <h1>Formulario para agregar productos</h1>
        </div>
    <div className="container">
        <form onSubmit={enviar} >
            <input
             className="form-control" 
             type="text" 
             name= 'nombre' 
             placeholder='Nombre' 
             value={formData.nombre} 
             onChange={
                handlerChange}/>
            <input 
            className="form-control" 
            type="text" 
            name= 'descripcion' 
            placeholder='Descripcion' 
            value={formData.descripcion} 
            onChange={
                handlerChange} />
            <input 
            className="form-control" 
            type="text"
             name= 'codigo' 
             placeholder='Codigo' 
             value={formData.codigo} 
             onChange={
                 handlerChange} />
            <input 
            className="form-control" 
            type="text" name= 'imagenUrl'
            placeholder='imagenUrl' 
            value={formData.imagenUrl} 
            onChange={handlerChange} />
            <input 
            className="form-control" 
            type="text" 
            name= 'precio' 
            placeholder='precio' 
            value={formData.precio} 
            onChange={
                handlerChange} />
            <input 
            className="form-control" 
            type="text" 
            name= 'stock' 
            placeholder='stock' 
            value={formData.stock} 
            onChange={handlerChange} />
            <input 
            className="form-control" 
            type="text" 
            name= 'id' 
            placeholder="id(solo para modificar o eliminar productos)" 
            value={dataToUpdate.id} 
            onChange={handlerChange} />

            <div className="container">
                <button className="btn btn-primary" type="submit">Enviar</button>
                <button onClick={enviarAdmin} className="btn btn-secondary" type= "submit">EnviarAdmin</button>
            </div>
            <div className="container">
                <button onClick={modificar} className="btn btn-primary" type="submit">Modificar</button>
                <button onClick={modificarAdmin} className="btn btn-secondary" type="submit"> ModificarAdmin</button>
            </div>
            <div className="container">
                <button onClick={eliminar} className="btn btn-primary" type="submit">Eliminar</button>
                <button onClick={eliminarAdmin} className="btn btn-secondary" type="submit"> EliminarAdmin</button>
            </div>         
    </form>
    </div>
    </>

  )
}

export default ProductAdderForm