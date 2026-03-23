function Cart({ cart }) {
  return (
    <div className="p-6">
      <h2>Cart</h2>
      {cart.map((c, i) => <div key={i}>{c}</div>)}
    </div>
  );
}

export default Cart;