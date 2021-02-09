// Imports from react
import { useState, useEffect } from "react";

// Imports from third party libraries
import axios from "axios";

// Import of components
import Video from "./components/video/Video";

// Imports for styling
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://tiktok-clone-backend-2021.herokuapp.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="app">
      <div className="app__videos">
        {posts.map((post) => (
          <Video
            key={post.id}
            url={post.url}
            channel={post.channel}
            description={post.description}
            sound={post.sound}
            likes={post.likes}
            messages={post.messages}
            shares={post.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
