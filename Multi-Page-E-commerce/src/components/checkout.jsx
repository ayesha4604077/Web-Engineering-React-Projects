function Checkout() {
  return (
    <div className="p-6">
      <input className="border p-2 mb-2" placeholder="Name" />
      <input className="border p-2 mb-2" placeholder="Address" />
      <button className="bg-green-500 text-white px-3">Submit</button>
    </div>
  );
}

export default Checkout;