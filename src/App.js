// Import of components
import Video from "./components/video/Video";

// Imports for styling
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          channel="Example Channel"
          description="Here comes the description"
          sound="Example Sound - Drake"
          likes={143}
          messages={26}
          shares={8}
        />
        <Video
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          channel="Example Channel"
          description="Here comes the description"
          sound="Example Sound - Drake"
          likes={143}
          messages={26}
          shares={8}
        />
      </div>
    </div>
  );
}

export default App;
