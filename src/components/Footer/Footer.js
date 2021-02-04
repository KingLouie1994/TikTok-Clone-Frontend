// Imports from third party libraries
import Ticker from "react-ticker";

// Imports for styling
import "./Footer.css";

// Imports from Material UI
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <h3>@ChannelName</h3>
        <p>Here will be the description</p>
        <div className="footer__ticker">
          <MusicNoteIcon className="footer__icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
