import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, tasks, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = {
      text,
      category,
      id: uuid()
    }
    onTaskFormSubmit(formData)
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
