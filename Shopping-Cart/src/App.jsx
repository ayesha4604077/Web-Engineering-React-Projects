import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

function App() {
  const [cart, setCart] = useState([]);

  const add = (product) => {
    const exist = cart.find(p => p.id === product.id);
    if (exist) {
      setCart(cart.map(p =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const remove = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  const changeQty = (id, type) => {
    setCart(cart.map(p =>
      p.id === id
        ? { ...p, qty: type === "inc" ? p.qty + 1 : p.qty - 1 }
        : p
    ));
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      {products.map(p => (
        <div key={p.id} className="border p-3 mb-2 flex justify-between">
          <span>{p.name} (${p.price})</span>
          <button className="bg-blue-500 text-white px-2" onClick={()=>add(p)}>
            Add
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">Cart</h2>

      {cart.map(p => (
        <div key={p.id} className="border p-3 mt-2 flex justify-between">
          <span>{p.name}</span>

          <div>
            <button onClick={()=>changeQty(p.id,"dec")}>-</button>
            <span className="mx-2">{p.qty}</span>
            <button onClick={()=>changeQty(p.id,"inc")}>+</button>
          </div>

          <button className="text-red-500" onClick={()=>remove(p.id)}>X</button>
        </div>
      ))}

      <h3 className="mt-4 font-bold">Total: ${total}</h3>
    </div>
  );
}

export default App;