import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Ali", subject: "Math", marks: 80 },
    { name: "Sara", subject: "Science", marks: 95 },
    { name: "Ayan", subject: "Math", marks: 70 },
  ]);

  const [filter, setFilter] = useState("");

  const sorted = [...students].sort((a, b) => b.marks - a.marks);

  const filtered = sorted.filter(s =>
    s.subject.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Student Table</h2>

      <input
        className="border p-2 mb-4"
        placeholder="Filter by subject"
        onChange={(e) => setFilter(e.target.value)}
      />

      <table className="border w-full text-center">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((s, i) => (
            <tr key={i} className="border">
              <td>{s.name}</td>
              <td>{s.subject}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;