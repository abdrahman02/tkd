import { useState, useEffect } from "react";
import Posts from "./pages/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_page=1"
      );
      const json = await response.json();
      setPosts(json);
    };
    fetchPost();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-full">
      <Posts posts={posts} />
    </main>
  );
}

export default App;
