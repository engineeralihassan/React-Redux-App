import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  let [markDown, setMarkDown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          name=""
          className="input"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
