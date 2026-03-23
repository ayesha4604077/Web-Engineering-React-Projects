import { useState } from "react";

function App() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        <button onClick={()=>setTab("profile")} className="bg-blue-500 text-white px-3">Profile</button>
        <button onClick={()=>setTab("settings")} className="bg-green-500 text-white px-3">Settings</button>
        <button onClick={()=>setTab("orders")} className="bg-purple-500 text-white px-3">Orders</button>
      </div>

      <div className="border p-4">
        {tab === "profile" && <p>👤 Profile Info</p>}
        {tab === "settings" && <p>⚙ Settings</p>}
        {tab === "orders" && <p>📦 Orders List</p>}
      </div>
    </div>
  );
}

export default App;