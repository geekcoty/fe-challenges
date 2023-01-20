import React from "react";
import "./article.scss"

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      word: "",
      phonetic: "",
      definition: "",
    };
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  async handleSearch() {
    const inputWord = this.state.inputValue.toLowerCase();
    const getWord = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
    );
    const wordJSON = await getWord.json();
    
    this.setState({
      word: wordJSON[0].word,
      phonetic: wordJSON[0].phonetic,
      definition: wordJSON[0].meanings[0].definitions[0].definition,
      inputValue: ""
    });
  }

  render() {
    const { word, phonetic, definition } = this.state;
    return (
      <React.Fragment>
        <section className="querySection">
          <input
            className="inputWord"
            value={this.state.inputValue}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <button onClick={() => this.handleSearch()} className="button">
            {" "}
            search{" "}
          </button>
        </section>
        <section className="resultSection">
          <p className="queryResult">{word}</p>
          <p className="queryResult">{phonetic}</p>
          <p className="queryResult">{definition}</p>
        </section>
      </React.Fragment>
    );
  }
}

export default Article;
