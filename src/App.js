import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductAdderForm from './components/ProductAdderForm';
import Cart from './components/Cart'
import CartContextProvider from './components/context/CartContext';
function App() {
  return (
    <>
    <CartContextProvider>

      <Router >
        <NavBar />
        <Routes>
          <Route path='/ventapc-cliente' element={<ItemListContainer/>} />
          <Route path='/ventapc-cliente/Cart' element={<Cart/>} />
          <Route path='/ventapc-cliente/Adder' element={ <ProductAdderForm/>} />
        </Routes>
      </Router>

    </CartContextProvider>



    <div className="App">
    </div>
    </>
  );
}

export default App;
