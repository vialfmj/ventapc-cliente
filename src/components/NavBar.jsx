import { Nav,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import App from "../App"
import CartWidget from "./CartWidget"

const NavBar = () =>{

    return(
        <>

        <Nav>
            <div className="container navBar">
                <div className='logo'>
                    <Link to='/ventapc-cliente' element={<App/>}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAUVBMVEX///8AAAArKyvT09Py8vIODg75+flra2snJyeurq5wcHBDQ0MHBweVlZX19fXv7+/a2tpSUlK9vb1fX18REREYGBienp5kZGSPj4/Hx8d2dnYs/0eZAAACNUlEQVR4nO3bf4+CMAwGYGAggijiL/C+/we94+7GJNtoJ1uXYN+/NJnpIwNrQkkSDscQUWdFGjhFVgtL+V0ZurhMuTPWP1DVT9ODSUD2/ceUhv2nrJ+m+nlQ0wJqDZDRAjINEPz6m6fQADPeIHLThbImuRhmB3kB0Bx9F5c5NhhAcwlVP0kuDQIQ7PuPOcIA/fT0mgwEDGEBAwiwtSpPESDA+/U3Tz4DLPX/hb69Ki8AuP+b+7YvAKb/G/u2LwCq/xv6ti8Asv97Pw8mALL/633bFwDZ/73/ME4AZP/X+7YvwPQCWsgABjBg8wAoDGAAA7YPABcygAEM2DwACgMYwAAGMIABDGAAAxjAAAZ4rq9uXEYCqFu3kQDq5nUkgLp9HwfwMsAQBfA6whEDMBtioQZoYzxYQKgw4OMBRWxAFhtQxwYIBdhXeV7tieuX6p/Jvh1/p1pawTgeJF9Xf7+UFWX93wEp+eZ/dixf+oDPTCNiWICvZqRFFoC2IDgAOgmDA6DLMDwAiPHD506bgyq6Mx3gfDOtvLkJ1gA689KODGCZQ3ObO1sDcFnLgE0CWtvalgjwtK19EgG+bGu/aACnu23t/UQCsB4At0PwNqBq7IubKjzgsVD/R/AIDDhdofVX7Hnw1mCzQMxjZ8hx9HdGux8odYHbBvfhdvjwy6C2wXm8H3P4ZVDb4PiAA+7wy2C2wekRj13vUn5MDz8d4vKQC3r7Va6IXcA/5tMb/wcv5dYjAJyPzjdO5iN3PwtVkQAAAABJRU5ErkJggg==" alt="imagen del logo de la empresa" />
                    </Link>
                </div>
                <div className="container">
                    <Link to='/ventapc-cliente/Adder'>
                        <Button variant='primary'> Agregar productos</Button>
                    </Link>
                    <Link to='/ventapc-cliente/Contacto'>
                        <Button variant='primary'>Contacto</Button>
                    </Link>
                    <Link to='/ventapc-cliente/Galeria'>
                        <Button variant='primary'>Galeria</Button>
                    </Link>
                    <Link to='/ventapc-cliente/Nosotros'>
                        <Button variant='primary'>Nosotros</Button>
                    </Link>
                </div>
            <div className='container contenedorCarrito'>
                <Link to='/ventapc-cliente/Cart'>
                    <CartWidget />
                </Link>
            </div>
            </div>

        </Nav>
        </>
    )
}
export default NavBar 