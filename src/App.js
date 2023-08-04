import { useState, useEffect } from "react";
import Editors from "./Editors";
function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="App">
      <div className="container top-container">
        <Editors language="html" value={html} onChange={setHtml} />
        <Editors language="css" value={css} onChange={setCss} />
        <Editors language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="container bottom-container">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
