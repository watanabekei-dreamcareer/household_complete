import React from 'react';
import './CategorySummary.css';

const CategorySummary = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>カテゴリ別合計</h2>
      <ul className="category-summary">
        {Object.keys(categoryTotals).map((category, index) => (
          <li key={index} className="category-item">
            {category}: ¥{categoryTotals[category]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySummary;

