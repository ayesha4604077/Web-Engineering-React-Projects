function Card({list}){
    return (
        <div className="p-6 grid grid-cols-3 gap-4">
            {list.map((e,i) => (
                <div key={i} className="border p-4 rounded shadow">
                    <h5>{e.name}</h5> <br/>
                    <h6>Age: {e.age}</h6>
                    <h6>Gender: {e.gender}</h6>
                </div>
            ))}
        </div>
    );
}

export default Card;