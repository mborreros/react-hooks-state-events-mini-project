import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  // content applicable to TaskList
  const [stateOfTasks, setTaskState] = useState(TASKS)

  function handleDeleteButton(event) {
    const newTaskArray = stateOfTasks.filter((task) => event.target.id !== task.text); 
    setTaskState(newTaskArray);
  }

  // content applicable to CategoryFilter
  const [isSelected, setStateOfSelected] = useState(false)

  function handleCategoryClick(event) {
    setStateOfSelected (event.target.id)

    const filteredTaskArray = (event.target.id === "All") ? TASKS : TASKS.filter((task) => task.category === event.target.id)
    setTaskState(filteredTaskArray)

  };


  //content applicable to NewTaskForm
  function onTaskFormSubmit({details, category}) { 
    setTaskState([...stateOfTasks, {text: details, category: category}])
    document.getElementById("task-text").value = "";
  } 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={isSelected} categoryClick={handleCategoryClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={stateOfTasks} categories={CATEGORIES} handleDelete={handleDeleteButton}/>
    </div>
  );
}

export default App;
