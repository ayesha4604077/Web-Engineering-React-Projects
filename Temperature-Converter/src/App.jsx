import { useState } from "react";

function App() {
  const [c, setC] = useState("");
  const [history, setHistory] = useState([]);

  const convert = () => {
    const f = (c * 9/5) + 32;
    setHistory([...history, `${c}C = ${f}F`]);
  };

  return (
    <div className="p-6 text-center">
      <input
        className="border p-2"
        placeholder="Celsius"
        onChange={(e) => setC(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-3 ml-2"
        onClick={convert}
      >
        Convert
      </button>

      <p className="mt-2">
        Fahrenheit: {(c * 9/5) + 32}
      </p>

      <h3 className="mt-4 font-bold">History</h3>
      {history.map((h, i) => <div key={i}>{h}</div>)}
    </div>
  );
}

export default App;