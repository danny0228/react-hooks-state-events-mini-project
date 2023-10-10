import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  const onDeleteTask = (taskToBeDeleted) => {
    setTasks(tasks.filter(task => taskToBeDeleted !== task))
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  function onTaskFormSubmit(formData) {
    setTasks(tasks => [...tasks, formData])

  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} tasks={TASKS} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

