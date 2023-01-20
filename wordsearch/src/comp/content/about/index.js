import React from "react";
import language from "../../../assets/lang.jpeg"
import "./about.scss"

class About extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="aboutSection">
        <p className="aboutTitle"> English word search</p>
        <img src={language} alt="Cap America saying language"  className="aboutImg"/>
        </section>
      </React.Fragment>
    );
  }
}

export default About