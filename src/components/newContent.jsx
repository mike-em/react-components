import React from "react";
import "../index.css";

export default function newContent(handleShow, show) {
  // can't use React hooks here
  // const [show, setShow] = React.useState(false);
  //
  // const handleShow = () => {
  //   setShow(!show);
  // };

  // unnecessary function variable {@text} offers the same
  // function buttonText() {
  //   return show ? "hide me" : "show me";
  // }

  const text = show ? "hide me" : "show me";

  return (
    <div className="content">
      <button onClick={handleShow}>{text}</button>
      {show && <p>hidden content</p>}
    </div>
  );
}
