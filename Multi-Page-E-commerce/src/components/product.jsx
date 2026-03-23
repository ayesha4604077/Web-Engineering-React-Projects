function Products({ addToCart }) {
  const items = ["Laptop", "Phone"];

  return (
    <div className="p-6">
      {items.map((item, i) => (
        <div key={i} className="border p-3 mb-2">
          {item}
          <button
            className="bg-blue-500 text-white px-2 ml-2"
            onClick={() => addToCart(item)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;