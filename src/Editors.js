import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import Editor from "@monaco-editor/react";

function Editors({ language, onChange, value }) {
  const [small, setSmall] = useState(false);
  const handler = (value, event) => {
    onChange(value);
  };

  return (
    <div className={`editor ${small && "editor-small"}`}>
      <div className="header">
        <h2>{language}</h2>
        <FontAwesomeIcon
          icon={faUpRightAndDownLeftFromCenter}
          className="icon"
          onClick={() => {
            setSmall((prv) => !prv);
          }}
        />
      </div>
      <Editor
        height="45vh"
        defaultLanguage={language}
        onChange={handler}
        className="my-editor"
      />
      ;
    </div>
  );
}

export default Editors;
