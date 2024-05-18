import React from 'react';
import './CategoryBar.css';

function CategoryBar({ categories, onCategoryClick }) {
  return (
    <div className="category-bar">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
