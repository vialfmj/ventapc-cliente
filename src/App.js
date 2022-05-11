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

      <Router basename="/ventapc-cliente">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Adder' element={ <ProductAdderForm/>} />
        </Routes>
      </Router>

    </CartContextProvider>



    <div className="App">
    </div>
    </>
  );
}

export default App;
