import React from "react";
import "../index.css";

const menuLeft = (handleClick, state) => {
  // it is not allowed to use hooks inside javascript function
  // const [state, setState] = React.useState(false);
  //
  // const handleClick = () => {
  //   setState(!state);
  // };
  return (
    <ul className="list">
      <li className={state ? "list-red" : "list-item"} onClick={handleClick}>
        item
      </li>
      <li className="list-item">item</li>
      <li className="list-item">item</li>
    </ul>
  );
};

const MenuRight = () => {
  // it is common to use hooks inside javascript functional component
  const [state, setState] = React.useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <ul className="list">
      <li className={state ? "list-red" : "list-item"} onClick={handleClick}>
        item
      </li>
      <li className="list-item">item</li>
      <li className="list-item">item</li>
    </ul>
  );
};

export default function Header() {
  const [state, setState] = React.useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="header">
      {menuLeft(handleClick, state)}
      <MenuRight />
    </div>
  );
}
