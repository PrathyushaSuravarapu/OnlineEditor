import React, { useState } from "react";
import "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closetag";
import "codemirror/mode/css/css";
import HTML from "../Images/HTML.png";
import CSS from "../Images/CSS.png";
import JS from "../Images/JS.png";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ language, nameOfEditor, value, onChange, onClear }) {
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }
  let image;
  if (nameOfEditor === "HTML") {
    image = HTML;
  } else if (nameOfEditor === "CSS") {
    image = CSS;
  } else if (nameOfEditor === "JS") {
    image = JS;
  }
  return (
    <div className={`editor-container ${open ? "" : "collapsed"} `}>
      <div className="editor-title">
        <div className="logo">
          <img src={image} alt="Logo" />
          {nameOfEditor}
        </div>
        <div>
          <button onClick={() => setOpen((prevState) => !prevState)}>
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt } />
          </button>
        </div>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "dracula",
          lineNumbers: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
}

export default Editor;