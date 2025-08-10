import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams(); // extract the dynamic ":id" from URL

  // Simulated data (you could fetch from API instead)
  const posts = {
    1: { title: "Learning React Router", content: "This is a beginner's guide to React Router." },
    2: { title: "Dynamic Routing in React", content: "Learn how to handle dynamic routes in your apps." },
    3: { title: "React Tips and Tricks", content: "Improve your React skills with these tips!" },
  };

  const post = posts[id];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;
