import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
import Products from "./components/product";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <nav className="bg-gray-200 p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={(item)=>setCart([...cart,item])} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;