import React from 'react';
import './CategorySummary.css';

const CategorySummary = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>カテゴリ別合計</h2>
      <ul>
        {Object.keys(categoryTotals).map((category, index) => (
          <li key={index}>
            {category}: {categoryTotals[category].toLocaleString()}円
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySummary;

