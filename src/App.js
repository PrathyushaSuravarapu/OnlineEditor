import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import useLocalStorage from './Hooks/useLocalStorage'


const App = ()=> {
  const [html, setHtml] =  useLocalStorage("html", "");
  const [css, setCss] =  useLocalStorage("css", "");
  const [js, setJs] =  useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script></html>`);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <>
      <div className=" pane top-pane">
        <Editor
          langauge="xml"
          nameOfEditor="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          langauge="css"
          nameOfEditor="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          langauge="javascript"
          nameOfEditor="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className = "pane">
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          title="output"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
