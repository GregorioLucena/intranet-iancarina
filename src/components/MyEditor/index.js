import React, { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const MyComponent = (props) => {
  const [estado, setEstado] = useState("");

  const handleChange = (content) => {
    setEstado(content);
  };
  return (
    <>
      <div>
        <SunEditor
          setOptions={{
            height: 200,
            buttonList: buttonList.complex, // Or Array of button list, eg. [['font', 'align'], ['image']]
            // Other option
          }}
          lang="es"
          onChange={handleChange}
        />
        {console.log(estado)}
      </div>
      <div>{ReactHtmlParser(estado)}</div>
    </>
  );
};
export default MyComponent;
