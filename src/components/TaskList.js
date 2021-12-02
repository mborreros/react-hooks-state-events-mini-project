import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, handleDelete }) {
// tasks = state of tasks, an array of objects
// categories = categories from data, an array of strings

  // const [stateOfTasks, setTaskState] = useState(tasks)

  // function handleDeleteButton(event) {

  //   const newTaskArray = stateOfTasks.filter((task) => event.target.id !== task.text); 
  //   setTaskState(newTaskArray);
    
  // }

  const listOfTasks = tasks.map((task) => (
    <Task id={uuid()} key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/> ))

  return (
    <div className="tasks">
      <ul>{listOfTasks}</ul>
    </div>
  );
}

export default TaskList;
