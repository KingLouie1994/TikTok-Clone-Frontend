// Imports from react
import { useState, useRef } from "react";

// Import of components
import Footer from "../Footer/Footer";

// Imports for styling
import "./Video.css";

const Video = () => {
  // Managing local state
  const [playing, setPlaying] = useState(false);

  // Creating references
  const videoRef = useRef(null);

  // Handling events
  const handleVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoClick}
        className="video__player"
        loop
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <Footer />
    </div>
  );
};

export default Video;
