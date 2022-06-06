import React, { useState } from "react";
import Form from "./Form.js";

function Thing() {
  const [isCool, setIsCool] = useState(null);

  function handleClickYes() {
    setIsCool(true);
  }

  function handleClickNo() {
    setIsCool(false);
  }

  function yesPicture() {
    if (isCool === true) {
      return "https://wallpaperaccess.com/full/99987.jpg";
    }
    if (isCool === false) {
      return "https://media.istockphoto.com/photos/snarling-wolf-picture-id106508309?k=20&m=106508309&s=612x612&w=0&h=mEGaI7Zh8qdDNgWm8RXqnHlppVt5YVOzx9u7OI-ug5Y=";
    } else
      return "https://media.istockphoto.com/photos/portrait-of-grey-wolf-in-the-forest-picture-id1208985997?k=20&m=1208985997&s=612x612&w=0&h=_KXetfa-GdYiX73azWge2aRQQQ6rGXc7sKQDj_fCNgM=";
  }
  function displayCool() {
    if (isCool === true) {
      return "Aw, thanks!";
    }
    if (isCool === false) {
      return "Why the fuck not?";
    }
  }

  return (
    <React.Fragment>
      <h1>IS THIS COOL?</h1>
      <h3>{displayCool()}</h3>
      <img className="yesPicture" src={yesPicture()} height="200px"></img>
      <br></br>
      <button onClick={handleClickYes}>YES</button>
      <button onClick={handleClickNo}>NO</button>
    </React.Fragment>
  );
}

export default Thing;
