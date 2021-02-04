// Import of components
import Video from "./components/video/Video";

// Imports for styling
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
