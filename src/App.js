import React, {useState, useEffect} from 'react';
import './App.scss';

function App() {

const [quote, setQuote] = useState("Hi")
const [author, setAuthor] = useState("Ed")

useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then (
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
},[]);

let fetchNewQuote = () => {
  fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then (
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
}

return (
    <div className="App">
        <div className="quote" id="quote-box">
          <p id="text">"{quote}"</p>
          <p id="author">- {author}</p>
          <button className="btn" id="new-quote" onClick={fetchNewQuote}>Change Quote</button>
          <a className="tweet" id="tweet-quote" target="_blank" href={encodeURI('http://www.twitter.com/intent/tweet?text=${quote} -${author}')}>Tweet Quote</a>
          </div>
    </div>
  );
}

export default App;
