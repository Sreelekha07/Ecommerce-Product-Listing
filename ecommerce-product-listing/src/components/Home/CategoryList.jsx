import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = () => {
  const categories = ['Electronics', 'Clothing', 'Accessories'];

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <h2>{category}</h2>
          <Link to={`/category/${category.toLowerCase()}`} className="category-link">
            Browse {category}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
