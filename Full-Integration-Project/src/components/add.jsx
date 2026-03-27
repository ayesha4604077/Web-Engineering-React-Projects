import { useState } from "react";

function Add({addstudent}){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    return(
        <div>
            <input placeholder="Enter Name" onChange={e => setName(e.target.value)} className="border p-2 mr-2"/> <br/> <br/>
            <input placeholder="Enter Age" type = "number" onChange={e => setAge(e.target.value)} className="border p-2 mr-2"/> <br /> <br/>
            <input placeholder="Enter Gender" onChange={e => setGender(e.target.value)} className="border p-2 mr-2"/> <br/> <br/>
            <button className="border p-2 bg-blue-500 text-white" onClick={() => addstudent({name,age,gender})}>Add</button>
        </div>
    );
}

export default Add;