import React, { useState, useEffect } from "react";

function NewDog() {
  const [count, setCount] = useState(0);
  const [dog, setDog] = useState([]);

  let newDog = useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((response) => {
        setDog(response);
      });
  }, [count]);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <React.Fragment>
      <img src={dog.message} width="300px" />
      <br></br>
      <br></br>
      <button onClick={handleClick}>I would like a new dog please.</button>
    </React.Fragment>
  );
}

export default NewDog;
