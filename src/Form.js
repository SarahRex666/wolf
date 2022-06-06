import React, { useState } from "react";
import CommentList from "./CommentList";

function Form() {
  const [comment, setComment] = useState("Comment");
  const [formData, setFormData] = useState([]);

  function submitForm() {
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: formData,
      }),
    })
      .then((res) => res.json())
      .then((result) => setComment(result));
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitForm();
  }

  function handleChange(event) {
    setFormData(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formData} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
