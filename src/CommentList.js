import React, { useState, useEffect } from "react";

function CommentList() {
  const [comment, setComment] = useState([]);
  let allComments = useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((response) => setComment(response));
  }, []);
  let commentItems = comment.map((comment) => {
    return <li>{comment.comment}</li>;
  });
  return (
    <div>
      <h1>What am I doing</h1>
      <ul>{commentItems}</ul>
    </div>
  );
}
export default CommentList;
