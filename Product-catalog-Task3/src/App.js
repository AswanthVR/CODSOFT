import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";   
import CartPage from './Pages/CartPage';   
import ScrollToTop from './ScrollToTop';
import Shop from './Pages/Shop';  
import Product from './features/Product';
import ProductDetail from './Pages/ProductDetail';
function App() {
  return (
    <BrowserRouter>
 
          <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />  
              <Route path="/product/:productId" element={<ProductDetail/>} />
            
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;
