import { Link } from "react-router-dom";

function Posts() {
  const posts = [
    { id: 1, title: "Learning React Router" },
    { id: 2, title: "Dynamic Routing in React" },
    { id: 3, title: "React Tips and Tricks" },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* Dynamic links */}
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
