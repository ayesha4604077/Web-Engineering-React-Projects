import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [history,setHistory] = useState([]);

  const update = (val) => {
  setCount(val);
  setHistory([...history,val]);
};

  return (
    <>
    <div className="flex flex-col items-center p-6">
      <br/>
      <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => update(count + 1)}>Increment</button> <br/>
      <button className="bg-gray-500 text-white px-3 py-1 rounded" onClick={() => update(count - 1)}>Decrement</button> <br/>
      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => update(0)}>Reset</button> <br/>
      <ul>
        {history.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App;
