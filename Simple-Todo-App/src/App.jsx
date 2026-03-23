import { useState } from 'react'

function App() {
  const [todo,setTodo] = useState([]);
  const [task,setTask] = useState("");

  const add = () => {
    if(!task) return;
    setTodo([...todo, {task , done : false} ])
    setTask("");
  }

  return (
    <>
      <div className='max-w-md mx-auto p-6'>
        <input className="border p-2 flex-1" value={task} onChange={e => setTask(e.target.value)} /> <br/> <br/>
        <button className="bg-blue-500 text-white px-3 rounded" onClick={add}>Add</button>
      </div>
      {todo.map((t,i) =>
        <div key={i} className="flex justify-between bg-gray-100 p-2 mb-2">
          <span className={t.done ? "line-through" : ""}>
            {t.task}
          </span>
          <button onClick={() => {
            const updated = [...todo];
            updated[i].done = !updated[i].done;
            setTodo(updated);
          }}>✔</button>
          <button onClick={()=>setTodo(todo.filter((_,x)=>x!==i))}>Delete</button>
      </div>)}
    </>
  )
}

export default App
