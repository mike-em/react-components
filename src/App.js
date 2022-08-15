import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import newContent from "./components/newContent";

function App() {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Header />
      {Header()}
      <Content />
      {newContent(handleShow, show)}
    </div>
  );
}

export default App;
