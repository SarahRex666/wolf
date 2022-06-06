import React, { useEffect, useState } from "react";

function Landing() {
  const [fact, setFact] = useState("");
  let newHome = useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => res.json())
      .then((res) => {
        setFact(res.text);
      });
  }, []);
  return (
    <div>
      <h1>Welcome!</h1>
      <br></br>
      <h4>{fact}</h4>
    </div>
  );
}

export default Landing;
