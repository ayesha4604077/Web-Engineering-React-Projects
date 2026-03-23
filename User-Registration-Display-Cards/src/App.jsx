import { useState } from 'react'

function App() {
  const [user,setUser] = useState([]);
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [contact,setContact] = useState("");
  return (
    <>
      <div className="p-6">
        <input className="border p-2 mr-2" type= "text" placeholder='Enter First Name' onChange={(e) => setFname(e.target.value)}/> 
        <input className="border p-2 mr-2" type= "text" placeholder='Enter Last Name' onChange={(e) => setLname(e.target.value)}/> 
        <input className="border p-2 mr-2" type= "number" placeholder='Enter Contact Number' onChange={(e) => setContact(e.target.value)}/>
        <button className="bg-gray-500 text-white px-3 rounded" onClick={() => setUser([...user,{fname},{lname},{contact}])}>Add</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
         {user.map((u,i)=>(
        <div key={i}>
          {u.fname} {u.lname} {u.contact}
        </div>
      ))}
      </div>
    </>
  )
}

export default App
