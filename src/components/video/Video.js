// Imports from react
import { useState, useRef } from "react";

// Import of components
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

// Imports for styling
import "./Video.css";

const Video = ({
  url,
  channel,
  description,
  sound,
  likes,
  messages,
  shares,
}) => {
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
        src={url}
      />
      <Footer channel={channel} description={description} sound={sound} />
      <Sidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
