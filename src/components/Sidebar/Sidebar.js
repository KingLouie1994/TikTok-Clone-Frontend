// Imports from react
import { useState } from "react";

// Imports for styling
import "./Sidebar.css";

// Imports from Material UI
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const Sidebar = ({likes, messages, shares}) => {
  const [like, setLike] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__button">
        {like ? (
          <FavoriteIcon fontSize="large" onClick={() => setLike(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => setLike(true)} />
        )}
        <p>{like ? likes + 1 : likes}</p>
      </div>
      <div className="sidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="sidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default Sidebar;
