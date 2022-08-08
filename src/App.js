import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState('');
  return (
    <div>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}>
        </textarea>
        <article className="output">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </div>
  );
}

export default App;