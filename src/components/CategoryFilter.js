import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange, selectedCategory }) {

  // const onCategoryClicked = (category) => {
  //   setSelectedCategory(category)
  // }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button className={`${selectedCategory === category ? "selected" : " "}`} onClick={() => onCategoryChange(category)} key={category} >{category}</button>)}
    </div>
  );
}

export default CategoryFilter;



  // function handleCategoryChange(event) {
  //   setSelectedCategory(event);
  // }

  // const tasksToDisplay = categories.filter((category) => {
  //   if (selectedCategory === "All") return true;
  //   return tasks.category === selectedCategory
  // })