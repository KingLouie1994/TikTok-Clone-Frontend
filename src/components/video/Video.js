// Imports for Styling
import "./Video.css";

const Video = () => {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
};

export default Video;
