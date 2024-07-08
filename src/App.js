import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electronics from './components/Electronics/Electronics';
import Product from './components/Product/Product';

import Cart from './components/Cart/Cart';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/electronics' element={<Electronics/>} />
        <Route path='/electronics/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      
    </div>
  );
}

export default App;
