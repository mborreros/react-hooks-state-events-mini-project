import React, { useState } from "react";

// Next, update this form to be a controlled component, so that all form inputs are captured in state.
// When the form is submitted, add a new task to the list with the text and category from the form. You'll need a callback prop named onTaskFormSubmit for the tests to pass for this feature.

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [details, setStateOfNewTask] = useState("")
  const [category, setStateOfNewCategory] = useState()

  const categoriesNotInclAll = categories.filter((category) => category !== "All")
  const completeCategoryOptions = [" ", ...categoriesNotInclAll]

  const listOfOptions = completeCategoryOptions.map((category) => (
    <option key={category} value={category}>{category}</option>
  ))

  function handleChange(event) {
    if (event.target.name === "text") {
      setStateOfNewTask(event.target.value)
    }
    else if (event.target.name === "category") {
      setStateOfNewCategory(event.target.value)}
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({details, category})
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" id="task-text"  onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {listOfOptions}
        </select>
      </label>
      <input type="submit" value="Add task" id="task-category" onClick={handleFormSubmit}/>
    </form>
  );
}

export default NewTaskForm;
