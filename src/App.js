import { useState, useEffect } from "react";

import "./App.css";
import Quote from "./components/Quote";
import Clipboard from "./components/Clipboard";
import Footer from "./components/Footer";

const motivateURL = `https://type.fit/api/quotes`;

function App() {
  const [quote, setQuote] = useState("");

  // Functions as the quote generator
  useEffect(() => {
    const fetchQuote = async () => {
      const result = await fetch(motivateURL);
      result.json().then((json) => {
        const randomQuote = Math.floor(Math.random() * json.length);
        if (json[randomQuote].author === null) {
          setQuote(json[randomQuote].text);
        } else {
          setQuote(
            json[randomQuote].text +
              " — " +
              json[randomQuote].author.split(",")[0]
          );
        }
      });
    };
    fetchQuote();
  }, []);

  return (
    <main className="App">
      <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <path
            id="line"
            d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            vector-effect="non-scaling-stroke"
          />
        </defs>
      </svg>
      <section>
        <article className="left">
          <Clipboard />
        </article>
        <article className="right">
          <Quote quote={quote} />
          <Footer />
        </article>
      </section>
    </main>
  );
}

export default App;
