import React from "react";
import $ from "jquery";

import { Quotes } from "./Quotes.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.randomColor = this.randomColor.bind(this);
    this.randomQuote = this.randomQuote.bind(this);
    this.randomClick = this.randomClick.bind(this);
  }

  componentDidMount() {
    this.randomColor();
    this.randomQuote();
  }

  randomColor() {
    let randomCol = `hsl(${~~(360 * Math.random())}, 80%,  40%)`;
    $("body, #new-quote").css({
      "background-color": randomCol,
      transition: "all 1s ease-in-out",
    });
    $("#quote-text, #quote-author, #tweet-quote, #tumblr-quote").css({
      color: randomCol,
      transition: "all 1s ease-in-out",
    });
  }

  randomClick() {
    this.randomColor();
    this.randomQuote();
  }

  randomQuote() {
    let randomQuotes = Quotes[Math.floor(Math.random() * Quotes.length)];

    let fullQuote = document.querySelector("#quote-text");
    let quote = document.querySelector("#text");
    quote.innerHTML = `${randomQuotes.quote}`;

    let fullAuthor = document.querySelector("#quote-author");
    let author = document.querySelector("#author");
    author.innerHTML = `${randomQuotes.author}`;

    let animOpacity = [
      { opacity: 1, easing: "ease-out" },
      { opacity: 0, easing: "ease-in" },
      { opacity: 1 },
    ];

    fullAuthor.animate(animOpacity, 1000);
    fullQuote.animate(animOpacity, 1000);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div id="quote-text">
            <i className="fa-solid fa-quote-left"></i>
            <span id="text"></span>
          </div>
          <div id="quote-author">
            &ndash; <span id="author"></span>
          </div>
          <div className="buttons">
            <a
              href="https://twitter.com/intent/tweet"
              className="button"
              id="tweet-quote"
              target="_blank"
              title="Tweet this quote!"
            >
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a
              href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DAbigail%2BVan%2BBuren%26content%3DIf%2Byou%2Bwant%2Byour%2Bchildren%2Bto%2Bturn%2Bout%2Bwell%252C%2Bspend%2Btwice%2Bas%2Bmuch%2Btime%2Bwith%2Bthem%252C%2Band%2Bhalf%2Bas%2Bmuch%2Bmoney.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
              className="button"
              id="tumblr-quote"
              target="_blank"
              title="Post this quote on tumblr!"
            >
              <i className="fa-brands fa-square-tumblr"></i>
            </a>
            <button
              className="button"
              id="new-quote"
              onClick={this.randomClick}
            >
              New Quote
            </button>
          </div>
        </div>
        <footer className="footer">
          by{" "}
          <a href="https://codepen.io/noneif/pen/JjaqgbW" target="_blank">
            NoName
          </a>
        </footer>
      </div>
    );
  }
}
