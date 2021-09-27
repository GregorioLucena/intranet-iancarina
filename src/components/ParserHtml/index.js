import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const ParcerHtml = (props) => {
  return (
    <>
      <div>{ReactHtmlParser(props.html)}</div>
    </>
  );
};
export default ParcerHtml;
