import React, { useState } from 'react';

function CategoryFilter({ categories, onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = (category) => {
    setSelectedCategory(category);
    onSelect(category);
  };

  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
