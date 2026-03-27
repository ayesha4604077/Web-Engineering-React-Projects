function Student({list}){
    return (
        <div className="p-6">
        <table className="border w-full text-center">
            <thead className="bg-gray-200">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            </thead>
            <br/>
            <tbody>
            {list.map((e,i) => (
                <tr key={i} className="border"> 
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Student;