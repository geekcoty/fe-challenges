import React from "react";
import Content from "./comp/content";
import Footer from "./comp/footer";
import About from "./comp/content/about";

import "./style.scss"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="appWrapper">
          <section className="contentSection">
            <aside className="about">
              <About />
            </aside>
            <article className="content">
              <Content />
            </article>
          </section>
          <footer className="footer">
            <Footer />
          </footer>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
