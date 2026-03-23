import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "This is post 1" },
  { id: 2, title: "Post 2", content: "This is post 2" }
];

function Post() {
  const { id } = useParams();

  const post = posts.find(p => p.id == id);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;