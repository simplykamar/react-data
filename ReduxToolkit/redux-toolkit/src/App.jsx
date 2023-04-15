import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'


function App() {

  return (
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>} />

            </Routes>

            </BrowserRouter> 

  );
}

export default App
