import React from "react";

function CategoryFilter({ categories, selected, categoryClick }) {

  const buttonsOfCategories = categories.map((category) => <button className={selected === category ? "selected" : null} id={category} key={category} onClick={categoryClick}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
        <ul>{buttonsOfCategories}</ul>
    </div>
  );
}

export default CategoryFilter;
