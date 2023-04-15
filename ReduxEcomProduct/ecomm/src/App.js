// import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';
import ProductComponent from './components/ProductComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        {/* <Route path="*" element={</>}/> */}
        <Route path="/product/:productId" element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
