import React from "react";

function Task({ id, text, category, handleDelete }) {

  // console.log("category: " + category)
  // console.log("name :" + name)

// When the delete button is clicked, task should be removed from the list.

  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} id={text}>X</button>
    </div>
  );
}

export default Task;
