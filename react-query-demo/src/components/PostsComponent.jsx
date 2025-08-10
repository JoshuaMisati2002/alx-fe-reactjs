import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch, // function to manually refetch
    isFetching, // boolean: true when refetching
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 1, // 1 minute cache: won't refetch if visited again within 1 minute
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>

      {/* Manual Refetch Button */}
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

