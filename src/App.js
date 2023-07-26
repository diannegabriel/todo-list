import { useState, useEffect } from "react";

import "./App.css";
import Quote from "./components/Quote";
import Clipboard from "./components/Clipboard";

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
      {/* <header>
        <h1>MotivaDid</h1>
      </header> */}
      <section>
        <article className="left">
          <Clipboard />
        </article>
        <Quote quote={quote} />
      </section>
    </main>
  );
}

export default App;
