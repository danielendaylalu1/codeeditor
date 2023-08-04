import { useState, useEffect } from "react";
import Editors from "./Editors";
function App() {
  const [live, setLive] = useState(true);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const [srcDoc, setSrcDoc] = useState("");

  const docHandler = () => {
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
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      live &&
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
  }, [html, css, js, live]);

  return (
    <div className="App">
      <div className="container top-container">
        <Editors language="html" value={html} onChange={setHtml} />
        <Editors language="css" value={css} onChange={setCss} />
        <Editors language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="middle-container">
        <div className="middle-container">
          <button
            type="button"
            onClick={() => {
              setLive((prv) => !prv);
            }}
          >
            Live {live ? "on" : "off"}
          </button>
          {!live && (
            <button
              type="button"
              onClick={() => {
                docHandler();
              }}
            >
              Run
            </button>
          )}
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
    </div>
  );
}

export default App;
