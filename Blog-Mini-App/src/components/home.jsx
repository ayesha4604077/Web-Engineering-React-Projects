import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "This is post 1" },
  { id: 2, title: "Post 2", content: "This is post 2" }
];

function Home() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {posts.map(p => (
        <div key={p.id} className="border p-4 rounded shadow">
          <h3 className="font-bold">{p.title}</h3>

          {/* 👇 Navigate to detail page */}
          <Link
            className="text-blue-500"
            to={`/post/${p.id}`}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;