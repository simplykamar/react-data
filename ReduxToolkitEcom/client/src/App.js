import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
// import Navbar from './components/navbar/Navbar';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="/home" element={<Home/>} />
            <Route path="products/:id" element={<Products/>} />
            <Route path="product/:id" element={<Product/>} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
