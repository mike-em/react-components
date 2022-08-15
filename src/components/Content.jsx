import React from "react";
import "../index.css";

export default function Content() {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const text = show ? "hide me" : "show me";

  return (
    <div className="content">
      <button onClick={handleShow}>{text}</button>
      {show && <p>hidden content</p>}
    </div>
  );
}
