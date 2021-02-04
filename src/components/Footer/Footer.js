// Imports from third party libraries
import Ticker from "react-ticker";

// Imports for styling
import "./Footer.css";

// Imports from Material UI
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Footer = ({ channel, description, sound }) => {
  return (
    <div className="footer">
      <div className="footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="footer__ticker">
          <MusicNoteIcon className="footer__icon" />
          <Ticker mode="smooth">
            {() => (
              <>
                <p>{sound}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="footer__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="Song"
      />
    </div>
  );
};

export default Footer;
