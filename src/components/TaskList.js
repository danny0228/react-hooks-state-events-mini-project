import React from "react";
import Task from "./Task"
import { v4 as uuidv4 } from "uuid"

function TaskList({ tasks, onDeleteTask, selectedCategory }) {

  const filteredTasks = selectedCategory === "All"
    ? tasks : tasks.filter(task => task.category === selectedCategory);



  return (
    <div className="tasks">
      {filteredTasks.map((task) => (<Task onDeleteTask={(task) => { onDeleteTask(task) }} task={task} key={uuidv4()} />))}
    </div>
  );
}

export default TaskList;


// import React from "react";
// import Task from "./Task"
// import { v4 as uuidv4 } from "uuid"

// function TaskList({ tasks, onDeleteTask }) {
//   console.log(tasks)
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (<Task onDeleteTask={(task) => { onDeleteTask(task) }} task={task} key={uuidv4()} />))}
//     </div>
//   )

// }

// export default TaskList;