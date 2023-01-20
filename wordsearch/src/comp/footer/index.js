import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.scss"
class Footer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p className="footerText">
          Made with <FontAwesomeIcon icon={faHeart} /> by  <a href="https://twitter.com/rememberplut" className="footerLink">Coty </a>
        </p>
      </React.Fragment>
    );
  }
}

export default Footer